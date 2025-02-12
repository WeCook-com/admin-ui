import axiosClient from '@/apis/axiosClient';

const MILLISECONDS_IN_1_HOUR = 60 * 60 * 1000;
const MILLISECONDS_IN_3_SECONDS = 3 * 1000;

const swr = {
    value: {
        fetcher: url => axiosClient.get(url),
        dedupingInterval: MILLISECONDS_IN_1_HOUR,
        errorRetryInterval: MILLISECONDS_IN_3_SECONDS,
        errorRetryCount: 10,
        keepPreviousData: true,
    },
};

export default swr;
