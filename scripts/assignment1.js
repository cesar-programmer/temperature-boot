const isLoggedIn = true
const currentUser = 'ColususKing'
const userSubscriptionType = 'plus'
const preferredGenres = ['RPG', 'Sports', 'Fighting']
const parentalControlLevel = 2
const searchQuery = 'Best RPGs 2023'
const currentCategory = 'games'
const currentSelection = 'final fantasy'
const gameLibrary = ['Final Fantasy XV', 'FIFA 23', 'Mortal Kombat 11']
const movieLibrary = ['Spider Man ', 'Ready Player One']
const featuredContent = ['Cyberpunk 2077', 'The Witcher 3']
const shoppingCart = ['Horizon Forbidden West', 'Ghost of Tsushima']
const cartTotal = 119.98
const currentPlayback = 'Final Fantasy XV'
const playbackVolume = 70
const gameSaveData = { game: 'Final Fantasy XV', progress: 'Chapter 3' }
const friendList = ['ColususKing', 'NoobMaster69']
const messages = ['hi']
const currentChatFriend = 'ColususKing'
const languagePreference = 'English'
const accessibilityOptions = ['subtitle']

document.write(`<li>User Logged In: ${isLoggedIn}</li>`)
document.write(`<li>Current User: ${currentUser}</li>`)
document.write(`<li>Subscription Type: ${userSubscriptionType}</li>`)
document.write(`<li>Preferred Genres: ${preferredGenres.join(', ')}</li>`)
document.write(`<li>Parental Control Level: ${parentalControlLevel}</li>`)
document.write(`<li>Search Query: ${searchQuery}</li>`)
document.write(`<li>Current Category: ${currentCategory}</li>`)
document.write(`<li>Current Selection: ${currentSelection}</li>`)
document.write(`<li>Game Library: ${gameLibrary.join(', ')}</li>`)
document.write(`<li>Movie Library: ${movieLibrary.join(', ')}</li>`)
document.write(`<li>Featured Content: ${featuredContent.join(', ')}</li>`)
document.write(`<li>Shopping Cart: ${shoppingCart.join(', ')}, Total: $${cartTotal}</li>`)
document.write(`<li>Current Playback: ${currentPlayback}</li>`)
document.write(`<li>Playback Volume: ${playbackVolume}</li>`)
document.write(`<li>Game Save Data: ${gameSaveData.progress}</li>`)
document.write(`<li>Friend List: ${friendList.join(', ')}</li>`)
document.write(`<li>Messages: ${messages[0]}</li>`)
document.write(`<li>Current Chat Friend: ${currentChatFriend}</li>`)
document.write(`<li>Language Preference: ${languagePreference}</li>`)
document.write(`<li>Accessibility Options: ${accessibilityOptions[0]}</li>`)
