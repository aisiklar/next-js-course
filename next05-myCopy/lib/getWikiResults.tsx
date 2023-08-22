export default async function getWikiResults(searchTerm: string) {
  /* Original code
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })
 */

  // my code
  let searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchTerm,
    gsrlimit: "20",
    prop: "info|extracts|pageimages",
    explaintext: "true",
    exchars: "100",
    exintro: "true",
    exlimit: "max",
    format: "json",
    inprop: "url",
    origin: "*",
  });

  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?" + searchParams
  );

  return response.json();
}
