const apikey = "8823edd133854227b621646a5d897f22";
const blogContainer = document.getElementById("blog-container");
async function fetchRandomNews() {
  try {
    const apiUrl = `http://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching random news", error);
    return [];
  }
}
async () => {
  try {
    const article = await fetchRandomNews();
    console.log(articles);
  } catch (error) {
    console.error("Error fetching random news", error);
  }
};
