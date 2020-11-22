export default class OpenSkyService {

    startUrl = 'https://opensky-network.org/api'

    timeEnd = () => {
        return Math.floor(Date.now() / 1000)

    }

    timeBegin = (timestamp) => {
        return this.timeEnd() - timestamp * 60*150
    }

    getResource = async url => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`)
        }

        return await res.json();

    }

    getDeparturesByAirport = async (airport, timestamp) =>
        await this.getResource(this.startUrl +
            `/flights/departure?airport=${airport}&begin=${this.timeBegin(timestamp)}&end=${this.timeEnd()}`);

}


