import {Injectable} from "@angular/core";
@Injectable({providedIn: 'root'})
export class helper{

  async getData(url:string): Promise<Document> {
    return await fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const parser = new DOMParser();
        console.log(parser)
        return parser.parseFromString(text, "text/xml")
      });
  }

  formatData(imagesUrl:string[]):string[]{
    let htmlArray : string[] =[];
    imagesUrl.forEach(element =>{
      htmlArray.push( `
        <article>
            <img src="${element}" alt="" width=100% height=100%>
        </article>
      `)
    })
    return htmlArray;
  }
}
