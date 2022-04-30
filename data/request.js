export const saveProgress = async (nickname, score) => {
    const baseUrl = "http://localhost:3001"
    // const baseUrl = "https://preguntonback.herokuapp.com"
    const response = await fetch(`${baseUrl}/api/players/update-player`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nickname,
            score,
        }),
    });
}