import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/app";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import { BrowserRouter as Router } from "react-router-dom";

import {BookstoreService} from './services';  

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);
// let courses = [
//   { name: "Courses in England", prices: [0, 100] }, 
//   { name: "Courses in Germany", prices: [500, null] }, 
//   { name: "Courses in Italy", prices: [200, 400] }, 
//   { name: "Courses in Russia", prices: [null, 400] },
//   { name: "Courses in China", prices: [50, 250] },
//   { name: "Courses in USA", prices: [200, null] },
//   { name: "Courses in Kazakhstan", prices: [56, 324] },
//   { name: "Courses in France", prices: [null, null] },
// ];

// let requiredRange1 = [100, 200],
//     requiredRange2 = [100, 350],
//     requiredRange3 = [200, null];

// function filterOnCourses(course, requiredRange){

//   let [requiredRangeStart, requiredRangeEnd] = requiredRange
  
//   course.forEach(item => {
//     let [courseCostOne, courseCostTwo] = item.prices
//     if (courseCostOne == null) courseCostOne = 0; 
//     if (requiredRangeStart == null) requiredRangeStart = 0; 
//     if (courseCostTwo == null) courseCostTwo = Infinity; 
//     if (requiredRangeEnd == null) requiredRangeEnd = Infinity; 
  
//     if(requiredRangeStart - courseCostOne >= 0 && requiredRangeEnd - courseCostTwo <=0){
//       console.log(item);
      
//     }
      

//   })

// }

// filterOnCourses(courses, requiredRange2)

