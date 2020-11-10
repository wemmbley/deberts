/**
 * Game configuration
 */
class GameConfig {

    /**
     * Constructor
     * @param gameParams
     * @param players
     */
    constructor(gameParams, players) {
        this.filterGameParams(gameParams);
        this.filterPlayers(players);
        this.gameParams = gameParams;
    }

    filterPlayers(players) {

    }

    /**
     * Filter game params
     * @param gameParams
     */
    filterGameParams(gameParams) {
        if(gameParams.players === undefined) {
            throw new Error('Players count is not handed.');
        }
        if(gameParams.players < 2 || gameParams.players > 4) {
            throw new Error('Players count must been 2-4');
        }
        if(gameParams.versus === undefined) {
            throw new Error('versus is not handed.');
        }
        if( gameParams.versus !== '1x1' &&
            gameParams.versus !== '1x1x1' &&
            gameParams.versus !== '1x1x1x1' &&
            gameParams.versus !== '2x2' ) {
            console.log(gameParams.versus)
            throw new Error('versus must been 1x1/1x1x1/1x1x1x1/2x2');
        }
        this.gameParams = gameParams;
    }
}
module.exports = GameConfig;