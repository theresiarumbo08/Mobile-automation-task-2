export class HomePage {

    get HomeScreen(){
        return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView[1]")
    }

    get HomeScreenDescription(){
        return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView[2]")
    }

    get buttonHome(){
        return $("//android.widget.FrameLayout[@content-desc='Home']/android.view.ViewGroup/android.widget.TextView")
    }
}

export default new HomePage()