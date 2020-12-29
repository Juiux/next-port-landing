#!/bin/bash
# Disclaimer : do it at your own risk.
# Modify what you need
# Connect to internet before proceeding

# Set system clock
echo 'Setting system clock...'
timedatectl set-ntp true
timedatectl set-timezone Asia/Jakarta

# Format partition [Be careful]
echo 'Formatting partition...'
mkfs.fat -F 32 /dev/nvme0n1p6
mkfs.ext4 /dev/nvme0n1p8 -L "Root"
# mkfs.ext4 /dev/nvme0n1pX -L "Home"
mkswap /dev/nvme0n1p7

# Mounting points
echo 'Mounting partition...'
mkdir -p /mnt
mkdir -p /mnt/boot/efi
# mkdir -p /mnt/home
mount /dev/nvme0n1p6 /mnt/boot/efi
mount /dev/nvme0n1p8 /mnt
swapon /dev/nvme0n1p7

# Installing system
echo 'Installing system...'
pacstrap /mnt base base-devel linux linux-firmware grub efibootmgr os-prober ntfs-3g nano

# Generating fstab
echo 'Generating fstab...'
genfstab -U /mnt >> /mnt/etc/fstab

# Running as root
echo 'Running as root...'
arch-chroot /mnt

# Set localtime
echo 'Setting localtime...'
ln -sf /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
hwclock --systohc --utc

# Configuring languages
echo 'Setting languages...'
echo "en_US.UTF-8 UTF-8
id_ID.UTF-8 UTF-8" >> etc/locale.gen
echo "LANG=en_US.UTF-8
LC_TIME=id_ID.UTF-8
LC_COLLATE=C" > /etc/locale.conf

# Network
echo 'Setting up hosts...'
echo "arch" > /etc/hostname
echo "127.0.0.1 localhost
::1 localhost
127.0.1.1 arch.localdomain arch" >> /etc/hosts

# Sudoers
echo 'Configuring users...'
echo "%wheel ALL=(ALL) ALL" >> etc/sudoers
echo 'Your name: '
read varname
echo 'Your username: '
read varusername
echo "Your name is $varname and username is $varusername"
useradd -m -g users -G wheel -c "$varname" $varusername
echo 'Enter your password and root password'
passwd $varusername
passwd root

# Installing microcode
echo 'Installing CPU microcode...'
pacman -S amd-ucode

# initramfs
echo 'Configuring initramfs...'
mkinitcpio -P

# Grub
echo 'Installing GRUB...'
mkdir -p /boot/efi
mount /dev/nvme0n1p6 /boot/efi
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=Arch_Linux
grub-mkconfig -o /boot/grub/grub.cfg

# Installing desktop environments
echo 'Installing DE...'
pacman -S plasma kde-applications
pacman -S sddm
systemctl enable sddm.service


