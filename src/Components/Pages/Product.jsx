import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Product.scss'
export default function Product() {
    const [col, setCol] = useState('')
        
    function changeColor() {
        setCol(`rgba(245, 150, 27, 1)`)
    }

    function changeColor1() {
        setCol(`rgba(245, 66, 27, 1)`)
    }
    function changeColor2() {
        setCol(`rgba(81, 129, 223, 1)`)
    }

    function changeColor3() {
        setCol(`rgba(103, 170, 130, 1)`)
    }
    function changeColor4() {
        setCol(`rgba(226, 228, 122, 1)`)
    }

    function changeColor5(){
        setCol(`rgba(186, 104, 251, 1)`)
    }
    function changeCol(e) {
        setCol(e.target.value)
    }
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const [product, setProduct] = useState([])
    const [prodItems, setItems] = useState('electronics')
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${prodItems}`)
          .then((res) => {
            setProduct(res.data)
          })
    }, [prodItems])
    return (
        <div style={{background:col}} className='main'>
        <div className='col'>
            <button className='span2' onClick={changeColor1}></button>
            <button className='span3' onClick={changeColor2}></button>
            <button className='span4' onClick={changeColor3}></button>
            <button className='span5' onClick={changeColor4}></button>
            <button className='span6' onClick={changeColor5}></button>
            <input type='color' className='span7' value={col} onChange={changeCol}></input>
        </div>
        <div className='divSlider'>
            <button onClick={() => setItems('electronics')}>Electronics</button>
            <button onClick={() => setItems('jewelery')}>Jewelery</button>
            <button onClick={() => setItems("men's clothing")}>Men's clothing</button>
            <button onClick={() => setItems("women's clothing")}>Women's clothing</button>
        </div>
                <Carousel responsive={responsive} className='carusel' >
                {product.map((item) => {
                return (
                    <Card sx={{ maxWidth: 345 }} className='card'>
                    <CardActionArea>
                      <CardMedia className='cardimg'
                        component="img"
                        height="140"
                        image={item.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='title'>
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )
              }
                    
            )}
                </Carousel>
        </div>
    )
}