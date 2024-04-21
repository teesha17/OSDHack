import './Userd.css';
import ReactCardSlider from 'react-card-slider-component';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Card1.css';
import '@coreui/chartjs/dist/css/coreui-chartjs.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChatList } from 'react-chat-elements'
import { PieChart } from '@mui/x-charts/PieChart';
import 'react-chat-elements/dist/main.css';
import Sidebr from './Sidebr.jsx';
import Top from './Top.jsx';
const data = [
    { id: 0, value: 10, label: 'A' },
    { id: 1, value: 15, label: 'B' },
    { id: 2, value: 20, label: 'C' },
  ];
export const Userd=({datta})=>{
  const slides = [
    {image: datta.image1 ,title:datta.name,description:"This is a description"},
    {image: datta.image1 ,title:datta.name,description:"This is a second description"},
    {image: datta.image1 ,title:datta.name,description:"This is a third description"},
    {image: datta.image1 ,title:datta.name,description:"This is a fourth description"},
    {image: datta.image1 ,title:datta.name,description:"This is a fifth description"},
    {image: datta.image1 ,title:datta.name,description:"This is a sixth description"},
    {image: datta.image1 ,title:datta.name,description:"This is a seventh description"},
]
    return(
        <>
        <div className="main">
        <Sidebr/>
        <div className="scnd">
        <div className="scnd-1">
        <Top dat={datta}/>
        <div className="lowtop" style={{fontWeight:"bold"}}><img src='https://i.pinimg.com/originals/11/99/dc/1199dc2ede62f4590b38baad08795240.jpg'/></div>
        <div className="lowlowtop">
        <div className="lowtop1">
        <div className="one">
        <div style={{backgroundColor:"lightblue"}}>one</div>
        <div>two</div>
        </div>
        <div className="messages">Messages
<ChatList
    className='chat-list'
    dataSource={[
        {
            avatar: 'https://facebook.github.io/react/img/logo.svg',
            alt: 'Reactjs',
            title: 'Facebook',
            subtitle: 'What are you doing?',
            date: new Date(),
            unread: 0,
        },
        {
          avatar: 'https://facebook.github.io/react/img/logo.svg',
          alt: 'Reactjs',
          title: 'Facebook',
          subtitle: 'What are you doing?',
          date: new Date(),
          unread: 0,
      }
    ]} /></div>
        </div>
        <div className="Graph">Graph
        <PieChart margin={"30px"}
       series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={300}
    />
        </div>
        </div>
        </div>
        <div className="scnd-2">
            <div className="scndf">My Purchases
            <div style={{display:'flex',padding:'40px',flexWrap:'wrap',justifyContent:"space-around"}}>
            <ReactCardSlider slides={slides}/>
            </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}