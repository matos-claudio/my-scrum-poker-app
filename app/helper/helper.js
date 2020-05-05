exports.createNameAvatar = (text) => {
    var name = text.nativeEvent.text
    var initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials
}