import useSWR from "swr";
import DefaultLayout from "../layouts/default";

const fetcher = (url: RequestInfo) => fetch(url).then(res => res.json());

export default function Covid() {
  function refresh(e: any) {
    e.preventDefault();
    window.location.reload();
  }

  const { data, error } = useSWR("api/data", fetcher);
  let itemsRender;
  if (data.data) {
      itemsRender = data.data.map((item: any) => (
        <div className="col-12 col-sm-6">
          <div className="card hover-shadow rounded-3 h-100">
            <div className="card-header h6">
              <p className="mt-2 mb-2">{item.country}</p>
            </div>
            <div className="card-body">
              <p className="card-text m-0">Cases: {item.cases}</p>
              <p className="card-text m-0">Deaths: {item.deaths}</p>
              <p className="card-text m-0">
                Today Cases: {item.todayCases}
              </p>
              <p className="card-text m-0">
                Today Deaths: {item.todayDeaths}
              </p>
              <p className="card-text m-0">Recovered: {item.recovered}</p>
            </div>
          </div>
        </div>
      ));
  }
  return (
    <DefaultLayout
      title="COVID-19 Tracker"
      description="Track COVID-19 cases worldwide."
    >
      <article className="bg-info text-dark pt-5 pb-5">
        <div className="container">
          <p className="display-5 mb-0 mt-3 text-center">COVID-19 Tracker</p>
          <p className="lead mb-3 mt-0 text-center">
            Track COVID-19 cases worldwide.
          </p>
        </div>
      </article>
      <section className="container mt-4 mb-5">
        <div className="row gx-3 gy-3">
          {itemsRender}
        </div>
      </section>
    </DefaultLayout>
  );
}
