// You can configure for example the axios interceptors to react on possible errors
// from your API calls across the application.
// In this example we redirect the user to a custom error
// page called sorry when we get a 500 status error from our API.

// export default function ({ $axios, redirect }) {
//     $axios.onError(error => {
//       if (error.response.status === 500) {
//         redirect('/sorry')
//       }
//     })
//   }
