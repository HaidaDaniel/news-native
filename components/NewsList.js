/** @format */

import React, { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { fetchTopNewsInUSA } from '../api'
import NewsCard from './NewsCard'

export default function NewsList() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetchTopNewsInUSA();
                setNews(response.data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error', error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    return (
        <View>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={news}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <NewsCard title={item.title} sourceName={item.source.name} />
                    )}
                />
            )}
        </View>
    );
}

