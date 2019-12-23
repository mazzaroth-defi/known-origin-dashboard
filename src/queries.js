import {gql} from "apollo-boost";

export const TODAY_COUNTS = gql`
    {
        today: days(first: 1, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;

export const THIS_WEEK_COUNTS = gql`
    {
        thisweek: days(first: 6, skip: 1, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;

export const THIS_MONTHS_COUNTS = gql`
    {
        thismonth: days(first: 30, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;
