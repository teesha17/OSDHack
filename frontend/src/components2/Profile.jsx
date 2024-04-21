import  ArcitectPage  from './ArcitectPage';
import YourImage from "./Screenshot 2024-04-21 023013.png";
import YourImage1 from "./Screenshot 2024-04-21 022918.png";
import GreenDatesCalendar from './Calendar';
import Testimonials from './Testimonials';
import './Profile.css'
function Profile(){
    const dummyUser = {
        name: "John Doe",
        profession: "Architect",
        ratings: 4.5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien in odio hendrerit consectetur. Morbi quis eleifend nulla. Proin fermentum ex eget mi feugiat, eu tincidunt elit vestibulum. Quisque ac turpis eu enim ullamcorper efficitur nec sit amet nisi. Fusce consequat erat eu leo varius, vel euismod ex fringilla. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien in odio hendrerit consectetur. Morbi quis eleifend nulla. Proin fermentum ex eget m",
        image: YourImage, // Main image URL
        thumbnailImages: [
          YourImage1,
          YourImage,
          YourImage1,
          YourImage
        ] ,// Array of thumbnail image URLs
        experience: 10,
      projects: 25,
      awards: 5,
      uni: "Harvard University",
      location:"delhi"
      };
      const greenDates = [
        new Date(2024, 3, 10), // Remember, months are 0-based in JavaScript Dates
        new Date(2024, 3, 15),
        new Date(2024, 3, 8),
        new Date(2024, 3, 22),
        new Date(2024, 3, 17),
        new Date(2024, 3, 12),
        new Date(2024, 3, 2)
      ];
      const testimonialData = [
        {
          profilePicture: YourImage1,
          name: 'John Doe',
          rating: 5,
          feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales leo non finibus molestie.'
        },
        {
          profilePicture: YourImage,
          name: 'Jane Smith',
          rating: 4,
          feedback: 'Integer vel felis non nulla feugiat interdum. Nulla facilisi.'
        },
        // Add more testimonials as needed
      ];
      
      return (
        <div className="App">
          <ArcitectPage user={dummyUser} />
          <div className='only'>
          <div className="calen">
          <GreenDatesCalendar greenDates={greenDates} />,
          </div>
          <div>
          <Testimonials testimonials={testimonialData} />
          </div>
        </div>
        </div>
      );
}
export default Profile;