export function prettyNameFromType(typeId) {
    switch (typeId) {
        case 'rides':
            return 'Rides';
        case 'hihats':
            return 'Hi-Hats';
        case 'crashes':
                return 'Crashes';
        case 'fxcymbs':
            return 'FX Cymbals';
        default:
            return 'Featured products';
    }
}