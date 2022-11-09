import React, { Component } from "react";
import axios from 'axios';

export default class Createproductos extends Component {
    state = {
        productos: []
    }
    async componentDidMount() {
        this.getproductos();
    }
    getproductos = async () => {
        const rest = await axios.get('http://localhost:3000/productos');
        this.setState({ productos:rest.data });
        
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md4'>
                    Formulario
                </div>
                <div className='col-md8'>
                    <ul className='list-group'>
                        {
                            this.state.productos.map(producto => (
                                <li
                                    className='list-group-item list-group-item-action'
                                    key={producto.id}
                                >
                                    {producto.name}
                                </li>
                            )

                            )
                        }
                    </ul>
                </div>
            </div>

        )
    }
}