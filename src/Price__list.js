import {Link, Route, Switch} from 'react-router-dom';

function Price__list(props) {
    return (
        <div className="col-md-4" id={props.shoes.id}>
         <Link to={`/detail/${props.shoes.id}`}><img  src={`https://codingapple1.github.io/shop/shoes${props.shoes.id + 1}.jpg`} width="100%"></img></Link>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
						<p>{props.shoes.price}</p>
        </div>
    )
}

export default Price__list;

// https://codingapple1.github.io/shop/shoes2.jpg