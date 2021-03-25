import React, { Component } from 'react';
import BreadcrumbsSection from '../components/DetailsPageComponents/BreadcrumbsSection/BreadcrumbsSection'
import PortfolioSection from '../components/DetailsPageComponents/PortfolioDetailsSection';
export class DetailsPage extends Component {
    state = {
        slug: this.props.match.params.slug
    }
    componentDidMount() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
        this.setState({
            slug:this.props.match.params.slug
        })
        }
      }
    render() {
        return (
            <main id="main">
             <BreadcrumbsSection/>
             <PortfolioSection slug={this.state.slug}/>
             {this.state.slug}
            </main>
        )
    }
}

export default DetailsPage
