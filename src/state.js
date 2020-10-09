
export async function getNews() {
    let response = await fetch("http://edu.eapolyak.beget.tech/getNews");
    let news = await response.json();
    return news;
}

export async function getTopic(title){
    let formData = new FormData();
    formData.append("title",title);
    let response = await fetch("http://edu.eapolyak.beget.tech/getTopic",{
        method: "POST",
        body: formData
    });
    let topic = await response.json();
    return topic;
}