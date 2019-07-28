import React from 'react';
// import SearchBar from './searchbar';
class ProductsMain extends React.Component {
    constructor() {
        super()
        this.state = {
            filterText: '',
            inStock: false
        }
    }
    render() {
        const row = this.props.products;
        return (
            <div><SearchBar filterText={this.state.filterText} inStock={this.state.inStock} row={row} />
            </div>
        )
    }
}
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: this.props.filterText, inStock: this.props.inStock }
        this.setFilter = this.setFilter.bind(this);
        this.setInstock=this.setInstock.bind(this);
    }
    setFilter(e) {
        this.setState({ filterText: e.target.value })
    }
    setInstock(e) {
        this.setState({ inStock: e.target.checked })
    }
    render() {
        return (
            <div>
                <form><label> Search for filter</label>
                    <input type="text" placeholder="Search ..." value={this.state.filterText} onChange={this.setFilter} /><br></br>
                    <input type="checkbox" checked={this.state.inStock} onChange={this.setInstock}></input>Show only products in stock</form>
                <ProductHeader row={this.props.row} filterText={this.state.filterText} inStock={this.state.inStock} /></div>

        )
    }
}
class ProductHeader extends React.Component {
    render() {
        const row = []
        let lastCategory = null;
        this.props.row.forEach(e => {
            const filterText = this.props.filterText;
            const inStock = this.props.inStock;
            if (e.name.indexOf(filterText) == -1) {
                return null;
            }
            if (inStock) {
                if (e.category !== lastCategory && e.stocked) {
                    row.push(<ProductCategory name={e.category} key={e.category} />)
                }
                if (e.stocked) {
                    row.push(<ProductRow name={e.name} price={e.price} key={e.name} />)
                }
            }else{
                if (e.category !== lastCategory) {
                    row.push(<ProductCategory name={e.category} key={e.category} />)
                }
                row.push(<ProductRow name={e.name} price={e.price} key={e.name} />)
            }
            
            lastCategory = e.category;
        });
        return (

            <div>
                <table><thead><tr><th>Name</th><th>Price</th></tr></thead><tbody>{row}</tbody></table>

            </div>

        )
    }
}
class ProductRow extends React.Component {
    render() {
        return (
            <tr><td>{this.props.name}</td><td>{this.props.price}</td></tr>
        )
    }
}
class ProductCategory extends React.Component {
    render() {
        return (
            <tr><th colSpan="2">{this.props.name}</th></tr>
        )
    }
}



export default ProductsMain;