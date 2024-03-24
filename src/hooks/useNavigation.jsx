export const useNavigation = () => {
    window.addEventListener('locationchange', function() {
        console.log('location chnaged')
    })
    return null;
}