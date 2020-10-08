
export async function getNews() {
    let response = await fetch("http://edu.eapolyak.beget.tech/getNews");
    let news = await response.json();
    return news;
}

