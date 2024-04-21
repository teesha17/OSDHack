// import  ArcitectPage  from './ArcitectPage';
// import YourImage from "./images.jpg";
// import YourImage1 from "./images 1.jpg";
// import Calendar from './Calendar';
// import Testimonials from './Testimonials';
// import './Profile.css'
// function Profile(){
//     const dummyUser = {
//         name: "John Doe",
//         profession: "Architect",
//         ratings: 4.5,
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien in odio hendrerit consectetur. Morbi quis eleifend nulla. Proin fermentum ex eget mi feugiat, eu tincidunt elit vestibulum. Quisque ac turpis eu enim ullamcorper efficitur nec sit amet nisi. Fusce consequat erat eu leo varius, vel euismod ex fringilla. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien in odio hendrerit consectetur. Morbi quis eleifend nulla. Proin fermentum ex eget m",
//         image: YourImage, // Main image URL
//         thumbnailImages: [
//           YourImage1,
//           YourImage,
//           YourImage1,
//           YourImage
//         ] ,// Array of thumbnail image URLs
//         experience: 10,
//       projects: 25,
//       awards: 5,
//       uni: "Harvard University"
//       };
//       const availableDates = [
//         "2024-04-05",
//         "2024-04-08",
//         "2024-04-15",
//         "2024-04-20",
//         "2024-04-25"
//       ];
//       const testimonialData = [
//         {
//           profilePicture: YourImage1,
//           name: 'John Doe',
//           rating: 5,
//           feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales leo non finibus molestie.'
//         },
//         {
//           profilePicture: YourImage,
//           name: 'Jane Smith',
//           rating: 4,
//           feedback: 'Integer vel felis non nulla feugiat interdum. Nulla facilisi.'
//         },
//         // Add more testimonials as needed
//       ];
      
//       return (
//         <div className="AppProfile">
//           <ArcitectPage user={dummyUser} />
//           <div className='only'>
//           <div>
//           <Calendar availableDates={availableDates} />
//           </div>
//           <div>
//           <Testimonials testimonials={testimonialData} />
//           </div>
//         </div>
//         </div>
//       );
// }
// export default Profile;



import React, { useState, useEffect } from 'react';
import ArcitectPage from './ArcitectPage';

const ArchitectDashboard = () => {
  const [architectData, setArchitectData] = useState(null);

  const fetchArchitectData = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail");
      const response = await fetch(`http://localhost:3000/api/architect?email=${userEmail}`);
      const data = await response.json();
      return data; // Return architect data from the backend
    } catch (error) {
      console.error('Error fetching architect data:', error);
      return null;
    }
  }

  useEffect(() => {
    const fetchArchitect = async () => {
      const data = await fetchArchitectData();
      setArchitectData(data);
    };

    fetchArchitect();
  }, []);

  return (
    <div>
      {architectData ? (
        <ArcitectPage user={architectData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArchitectDashboard;
