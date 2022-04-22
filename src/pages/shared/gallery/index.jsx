import React, { Component, Fragment } from 'react';
import NavbarComponent from '../../../components/navbar';
import FooterComponent from '../../../components/footer';
import axios from 'axios';
import { MiniLoading } from '../../../components/loading';

class Gallery extends Component {
    state = {
        gallery: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.get('/api/gallery').then(res => {
                if(res.status === 200){
                    const gallery = res.data.data;
                    this.setState({ gallery, loading: false })
                }
            }).catch(err => {
                console.log(err.message)
            })
            ;
        });    
    }

    render() {
        if(this.state.loading){
            return <div className="overflow-hidden">
                <MiniLoading />
            </div>
        }
        
        return (
            <Fragment>
                <NavbarComponent />
                <main>
                    <section className="relative py-20 mt-10 bg-white">
                        <div className="container mx-auto px-5 lg:px-40">
                            <p className="px-3 border-l-4 border-black capitalize font-semibold my-5">Galeri</p>

                            <div className="flex gap-5 justify-center flex-wrap drop-shadow-lg">
                                {this.state.gallery.map((item, index) => {
                                    return (
                                        <figure key={index}>
                                                <img className="h-48" src={`http://localhost:8000/${item.image}`} />
                                                <figcaption className="text-center bg-gray-300 text-gray-900 p-5 rounded-br-lg rounded-bl-lg">{item.title}</figcaption>
                                        </figure>
                                    )
                                })}
                            </div>
                        </div>
                        </section>
                    </main>
                <FooterComponent />
            </Fragment>
        )
    }
}

export default Gallery;
