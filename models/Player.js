class Player {
    /**
     * 
     * @param {string} nickname The player's nickname
     * @param {number} historyScore The accumulated score
     * @param {number} attempts The attempts made by the player
     */
    constructor(nickname, historyScore, attempts) {
        this.nickname = nickname;
        this.historyScore = historyScore;
        this.attempts = attempts;
    }

}

export { Player };
