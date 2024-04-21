// App.js

import './Appcard.css';
import { Card1 } from './card';

function Appcard() {
  const dataa= [
    {
      name: "Gaurav Hiroshi",
      location: "Delhi, Mumbai, India",
      profimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
      ],
      heading: "Experience",
      content: "Been working since birth!!",
      rating: 3.5
    },
    {
      name: "Gaurav Hiroshi",
      location: "Delhi, Mumbai, India",
      profimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
      ],
      heading: "Experience",
      content: "Been working since birth!!",
      rating: 3.5
    },
    {
      name: "Gaurav Hiroshi",
      location: "Delhi, Mumbai, India",
      profimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
      ],
      heading: "Experience",
      content: "Been working since birth!!",
      rating: 3.5
    },
    {
      name: "Gaurav Hiroshi",
      location: "Delhi, Mumbai, India",
      profimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
      ],
      heading: "Experience",
      content: "Been working since birth!!",
      rating: 3.5
    },
    {
      name: "Gaurav Hiroshi",
      location: "Delhi, Mumbai, India",
      profimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
      ],
      heading: "Experience",
      content: "Been working since birth!!",
      rating: 3.5
    },
    {
      name: "Gaurav Hiroshi",
      location: "Delhi, Mumbai, India",
      profimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKrA0er90LkB21SUccqN8xwMOiHYyqMGEwwSgMg6rcw&s"
      ],
      heading: "Experience",
      content: "Been working since birth!!",
      rating: 3.5
    }
    // Add more data objects as needed
  ];

  return (
    <div className="App">
      <div className="top-pane">Top Pane Content</div>
      <div className="main-container">
        <div className="left-pane">Left Pane - Filters</div>
        <div className="card-grid">
          {dataa.map((data, index) => (
            <Card1 key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appcard;
