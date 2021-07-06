export const goToLogin = (history) => {
    history.push('/users/login')
}

export const goToSignUp = (history) => {
    history.push('/users/signup')
}

export const goToFeed = (history) => {
    history.push('/posts')
}

export const goToPostDetail = (history, id) => {
    history.push(`/posts/${id}/comments`)
}

export const goToLogout = (history) => {
    window.localStorage.removeItem('token')
    history.replace('/')
}

export const goHome = (history) =>{
        history.replace('/')
}
export const goToLastPage = (history) => {
    history.goBack();
  };