
import  {Userd}  from './Userd';
import { useLocation } from 'react-router-dom';

function Userdash() {
  const { state } = useLocation();
  const obj = state?.objectss;
  console.log(obj);
  const dataa= {
    name: obj.name,
      location: obj.Location,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
      ],
      heading: obj.email,
      content: "Been working since birth!!",
      rating: 3.5,
        profimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        experience:14,
  };
  return (
    <div className="App">
      <Userd datta={dataa}/>
    </div>
  );
}

export default Userdash;
