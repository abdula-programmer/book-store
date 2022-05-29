export default class BookstoreService{
   
   data = [
      {
         id: 1, 
         title: "Атомные прывички",
         author: "Джеймс Клир",
         imgSrc: "https://cdn1.ozone.ru/s3/multimedia-0/wc1200/6007449912.jpg",
         price: 719
      },
      {
         id: 2,
         title: "НИ СЫ",
         author: "Джен Синеро",
         imgSrc: "https://img-gorod.ru/26/286/2628678_detail.jpg",
         price: 650
      }
   ];

   getBooks(){
      return new Promise ((resolve)=> {
         setTimeout(()=> {
            resolve(this.data)
         }, 700)
      })
   }
}