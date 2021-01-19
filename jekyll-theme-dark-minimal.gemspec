# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-dark-minimal"
  spec.version       = "0.1.4"
  spec.authors       = ["Will Badart"]
  spec.email         = ["wbadart@live.com"]

  spec.summary       = "A simple, dark-colored theme."
  spec.homepage      = "https://github.com/wbadart/jekyll-theme-dark-minimal"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
