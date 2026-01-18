export default function Sitemap() {
  // This component returns null as the sitemap is generated server-side
}

function generateSiteMap() {
  const baseUrl = "https://www.longstayachterhoek.nl";
  const currentDate = new Date().toISOString().split("T")[0];

  // Main pages
  const mainPages = [
    { path: "/", priority: "1.0" },
    { path: "/suites", priority: "1.0" },
    { path: "/about", priority: "1.0" },
    { path: "/contact", priority: "1.0" },
    { path: "/zakelijk", priority: "1.0" },
    { path: "/faciliteiten", priority: "1.0" },
  ];

  // Suite pages
  const suitePages = [
    "/suites/uitkijktoren-hulzenberg",
    "/suites/slipjacht",
    "/suites/kasteel-huis-bergh",
    "/suites/bergherbos",
    "/suites/oude-ijssel",
    "/suites/mtb-route",
    "/suites/lange-wei",
    "/suites/padevoort",
    "/suites/torenmolen",
  ].map((path) => ({ path, priority: "0.8" }));

  // SEO landing pages
  const seoPages = [
    "/woonruimte-in-de-achterhoek",
    "/woonruimte-in-de-buurt-van-doetinchem",
    "/woonruimte-in-de-buurt-van-sheerenberg",
    "/woonruimte-in-gelderland",
    "/woonruimte-voor-expats",
    "/tijdelijke-woonruimte",
    "/tijdelijke-woonruimte-in-de-buurt-van-doetinchem",
    "/tijdelijke-woonruimte-in-de-buurt-van-sheerenberg",
    "/tijdelijke-woonruimte-in-de-grensstreek",
    "/tijdelijke-woonruimte-in-gelderland",
    "/expats-housing",
    "/zakelijk-overnachten",
    "/serviced-apartments-in-doetinchem",
    "/serviced-apartments-in-nl",
    "/serviced-apartments-in-sheerenberg",
    "/volledig-ingerichte-appartementen-in-doetinchem",
    "/volledig-ingerichte-appartementen-in-nederland",
    "/volledig-ingerichte-appartementen-in-sheerenberg",
  ].map((path) => ({ path, priority: "0.7" }));

  const allPages = [...mainPages, ...suitePages, ...seoPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(({ path, priority }) => {
    return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
