import './App.css';
import {Component} from "react";


class App extends Component {
    state = {
        counter: 0,
        posts: [
            {
                id: 1,
                title: 'O título 1',
                body: 'O corpo 1'
            }, {
                id: 2,
                title: 'O título 1',
                body: 'O corpo 1'
            }, {
                id: 3,
                title: 'O título 3',
                body: 'O corpo 3'
            },
        ]
    };

    componentDidMount() {
        this.handleTimeOut();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    handleTimeOut = () => {
        const {posts, counter} = this.state;
        posts[0].title = 'O titulo foi mudado';
        setTimeout(() => {
            this.setState({posts, counter: counter + 1});
        }, 2000)
    }


    render() {
        const {posts, counter} = this.state;
        return (
            <div className="App">
                <h1>{counter}</h1>
                {posts.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}


// componentDidMount() {
//     setTimeout(() => {
//         this.setState({
//             posts: [
//                 {
//                     id: 1,
//                     title: 'O título 1',
//                     body: 'O corpo 1'
//                 }, {
//                     id: 2,
//                     title: 'O título 1',
//                     body: 'O corpo 1'
//                 }, {
//                     id: 3,
//                     title: 'O título 3',
//                     body: 'O corpo 3'
//                 },
//             ]
//         })
//     }, 5000);
// }

export default App;
