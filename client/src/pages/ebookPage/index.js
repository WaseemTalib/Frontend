import React, { Component } from 'react';
import Navbar from '../../components/nav';
import { connect } from 'react-redux';
import Header from '../../components/ebooks/header';
import EBooks from '../../components/ebooks/ebookList';
import Categories from '../../components/ebooks/Categories';
import Footer from '../../components/footer';
class index extends Component { 
    render() {

        const topRIM = [{
            image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
            title:"The Fire Heart Chronicles",
            writer:"abc",
            id:1,
            price:"$25",
            star:4},
            {
                image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
                title:"The Fire Heart Chronicles",
                writer:"abc",
                id:1,
                price:"$25",
                star:5},
                {
                    image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
                    title:"The Fire Heart Chronicles",
                    writer:"abc",
                    id:1,
                    price:"$25",
                    star:3},
                    {
                        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
                        title:"The Fire Heart Chronicles",
                        writer:"abc",
                        id:1,
                        price:"$25",
                        star:1.6},
                        {
                            image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
                            title:"The Fire Heart Chronicles",
                            writer:"abc",
                            id:1,
                            price:"$25",
                            star:4.2}];
            const nHSFF = [{
                image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572592545l/50001141._SX318_SY475_.jpg",
                title:"The Fire Heart Chronicles",
                writer:"abc",
                id:1,
                price:"$25",
                star:4},
                {
                    image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
                    title:"The Fire Heart Chronicles",
                    writer:"abc",
                    id:1,
                    price:"$25",
                    star:5},
                    {
                        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572592545l/50001141._SX318_SY475_.jpg",
                        title:"The Fire Heart Chronicles",
                        writer:"abc",
                        id:1,
                        price:"$25",
                        star:3},
                        {
                            image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
                            title:"The Fire Heart Chronicles",
                            writer:"abc",
                            id:1,
                            price:"$25",
                            star:1.6},
                            {
                                image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1512156631l/35379976._SY475_.jpg",
                                title:"The Fire Heart Chronicles",
                                writer:"abc",
                                id:1,
                                price:"$25",
                                star:4.2}];
                                const titles = ["Top Release in March","New & Hot in Biography & Memoir","New & Hot in Biography & Memoir","New Section......"]
        const { TopicList } = this.props;
        return <div className="container-fluid p-0" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar active={3} />
                <Header />
                {TopicList && TopicList.length > 0 && titles.map(title=><EBooks title={title} bookList = {topRIM}/>)}
                <Categories list={[...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList]} heading="Genres" />
                <Footer></Footer>
             </div>
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        isError: state.Profile.isError,
        RegisterFeed: state.RegFeed,
        TopicList: state.Topics.data
    }
}

export default connect(mapStateToProps)(index);