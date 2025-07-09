import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Movie() {
    let[shows, setShow] = useState([])

    useEffect(() => {
      axios.get(" https://api.tvmaze.com/search/shows?q=girls")
      .then((response) =>{
        setShow(response.data)
      })
      .catch((error) => {
          console.log(error);
        })

      return () => {
          console.log("cleanup running")
      }
    },[])
  // return (
  //   <div className='min-h screen bg-gray-100 py-10 px-4'>
  //     <h2 className='text-3xl font-bold text-center text-blue-700 mb-8'>
  //       Tv Show: Girls
  //     </h2>
  //     <div className='gird gird-cols-1 gap-5 max-w-7xl mx-auto'>
  //       {
  //         shows.map(item=>(
  //           <div key={item.show.id} className='bg-white rounded-md transition duration-300 w-full'>
  //             {item.show.image && (
  //               <img src={item.show.image.medium}
  //               className='w-full h-52 object-cover'
  //               />
  //             )}
  //             <div className='p-3'>
  //               <h3 className='text-base font-semibold text-gray-800'>
  //                 {item.show.name}
  //               </h3>
  //               {item.show.language && (
  //                 <p className='text-sm text-gray-600'>
  //                   language:{item.show.language}
  //                 </p>
  //               )}
  //             </div>
  //           </div>
  //         ))
  //       }

  //     </div>
  //   </div>
  // )
  // ...existing code...
  return (
    <div className='min-h-screen bg-gray-100 py-10 px-4'>
      <h2 className='text-3xl font-bold text-center text-blue-700 mb-8'>
        Tv Show
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {
          shows.map(item=>(
            <div key={item.show.id} className='bg-white rounded-lg shadow-md transition duration-300 w-full flex flex-col items-center hover:scale-105'>
              <img
                src={item.show.image ? item.show.image.medium : 'https://via.placeholder.com/210x295?text=No+Image'}
                alt={item.show.name}
                className='w-52 h-72 object-cover rounded mb-4'
              />
              <div className='p-3 flex flex-col items-center'>
                <h3 className='text-xl font-semibold text-gray-800 mb-2 text-center'>
                  {item.show.name}
                </h3>
                {item.show.language && (
                  <p className='text-sm text-gray-600 mb-2'>
                    Language: {item.show.language}
                  </p>
                )}
                {item.show.summary && (
                  <div
                    className='text-gray-700 text-sm mb-2 text-center'
                    dangerouslySetInnerHTML={{ __html: item.show.summary }}
                  />
                )}
                <a
                  href={item.show.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='mt-2 text-blue-500 hover:underline'
                >
                  More Info
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
// ...existing code...
}

export default Movie

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function Movie() {
//     let [shows, setShow] = useState([])

//     useEffect(() => {
//         axios.get("https://imdb.iamidiotareyoutoo.com/search?tt=tt2250912")
//             .then((response) => {
//                 setShow(response.data.data || [])
//             })
//             .catch((error) => {
//                 console.log(error);
//             })

//         return () => {
//             console.log("cleanup running")
//         }
//     }, [])

//     return (
//         <div className='min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-10 px-4'>
//             <h2 className='text-4xl font-extrabold text-center text-purple-700 mb-10 drop-shadow'>
//                 Movie List
//             </h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto'>
//                 {
//                     shows.map(movie => (
//                         <div
//                             key={movie.imdbid || movie._id}
//                             className='bg-white rounded-2xl shadow-lg transition-transform duration-300 w-full flex flex-col items-center hover:scale-105 border border-purple-200'
//                         >
//                             <img
//                                 src={movie.image || 'https://via.placeholder.com/210x295?text=No+Image'}
//                                 alt={movie.title || 'No Title'}
//                                 className='w-52 h-72 object-cover rounded-t-2xl mb-4 shadow'
//                             />
//                             <div className='p-5 flex flex-col items-center w-full'>
//                                 <h3 className='text-xl font-bold text-gray-800 mb-2 text-center'>
//                                     {movie.title || 'No Title'}
//                                 </h3>
//                                 {movie.genres && (
//                                     <p className='text-sm text-gray-500 mb-2 text-center'>
//                                         <span className='font-semibold'>Genre:</span> {Array.isArray(movie.genres) ? movie.genres.join(', ') : movie.genres}
//                                     </p>
//                                 )}
//                                 {movie.rating && (
//                                     <p className='text-sm text-gray-500 mb-2 text-center'>
//                                         <span className='font-semibold'>Rating:</span> {movie.rating}
//                                     </p>
//                                 )}
//                                 <a
//                                     href={movie.imdblink || '#'}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className='mt-2 text-purple-600 hover:underline font-semibold'
//                                 >
//                                     More Info
//                                 </a>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Movie