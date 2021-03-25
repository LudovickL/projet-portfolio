const UnProjet = ({projets}) => {
    const {texteCourt, image, descriptionDuProjet, lienDuProjet} = projets.fields;
    return(
        <h1>{texteCourt}</h1>
    )
}