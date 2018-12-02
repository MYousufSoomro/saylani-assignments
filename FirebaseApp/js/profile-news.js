var apikey = '3cb83a9e548b40bd9ab158b3dcbd31c7';
const main = document.querySelector("#div");
const selector = document.querySelector('#selector')
const defineDefualt = "techcrunch"

window.addEventListener('load', async e => {
    updatedNews()
    await upadteSources()
    selector.value = defineDefualt;

    selector.addEventListener('change', e => {
        updatedNews(e.target.value)
    })

})

async function upadteSources() {
    const res = await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json()
    // console.log(json)

    selector.innerHTML = json.sources
        .map(src => `<option value="${src.id}">${src.name}</option>`).join('\n')
}

async function updatedNews(source = defineDefualt) {
    const res = await fetch(`https://newsapi.org/v1/articles?source=${source}&apikey=${apikey}`);
    console.log(res)
    const data = await res.json();
    console.log(data)
    main.innerHTML = data.articles.map(createArticles).join('\n')
}

function createArticles(article) {
    return `
            <div class="col-md-12 col-lg-12 col-sm-12">
                <div class="col-md-3 col-lg-3 col-sm-3">
                    <img class="img-thumbnail rounded float-left" src="${article.urlToImage}" alt="${article.title}">
                </div>
                <div class="col-md-12 col-lg-12 col-sm-12">
                    <h3><a class="link" href="${article.url}?ref=@MYousufSoomro-on-twitter?source=saylani-student" target="_blank">${article.title}</a></h3>
                    <small><i  class="fas fa-clock"></i> Published at: ${article.publishedAt} by ${article.author}</small>
                    <p>${article.description}</p>
                    <div class="text-right">
                        <a href="${article.url}?ref=@MYousufSoomro-on-twitter?source=saylani-student" target="_blank"
                            class="btn btn-primary">Read More <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="text-right col-md-12 col-lg-12 col-sm-12">
                    <hr class="col-md-12 col-lg-12 col-sm-12 style">
                </div>
            </div>
            `
}