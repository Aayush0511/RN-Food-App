import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer n4bnnafNHzJcerRwN0FF8pjqKdZ_ToRGb4IzOnlyHTArMgJKcq9aWjfq0QJEVWKN3Vos_jsqQguwB6y0UtXJuuQe1Dq3KXot4FMIdsNfMD95zKfALP964oRC_R0MYXYx'
    }
});