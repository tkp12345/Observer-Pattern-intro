class JSFile{
    update(){}
}

class 이벤트저장소 {
    constructor() {
        this.JSFile_List = []
    }

    register(target) {
        this.JSFile_List.push(target)
    }

    notify() {
        console.log('등록된 JSFILE : ',this.JSFile_List)
        this.JSFile_List.forEach(JSFile => JSFile.update())
    }
}

const store = new 이벤트저장소()

class JSFile1 extends JSFile {
    update(){
        console.log('JSFile1 좋아요 + 1')
    }

}
class JSFile2 extends JSFile {
    update(){
        console.log('JSFile2 좋아요 + 1')
    }
}
class JSFile3 extends JSFile {
    update(){
        console.log('JSFile3 좋아요 + 1')
    }
}

const jsFile1 = new JSFile1();
const jsFile2 = new JSFile2();
const jsFile3 = new JSFile3();


store.register(jsFile1)
store.register(jsFile2)
store.register(jsFile3)

store.notify('좋아요 +1')
// JSFile1 : '좋아요 +1'
// JSFile2 : '좋아요 +1'
// JSFile3 : '좋아요 +1'