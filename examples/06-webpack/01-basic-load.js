function component () {
    var element = document.createElement( 'div' );

    /* lodash is required for the next line to work */
    element.innerHTML = _.join( [ 'Hello','webpack' ], ' ' );

    return element;
}

function onBodyLoad() {
  document.body.appendChild( component() );
}
