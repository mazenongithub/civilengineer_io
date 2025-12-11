class CivilEngineer {
   getRegularFont() {

        if (this.state.width > 900) {
            return ({ fontSize: '24px' })
        } else {
            return ({ fontSize: '20px' })
        }

    }
    getHeaderFont() {

        if (this.state.width > 900) {
            return ({ fontSize: '30px' })
        } else {
            return ({ fontSize: '24px' })
        }

    }

}

export default CivilEngineer;