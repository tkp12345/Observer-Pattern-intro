class 이벤트저장소 {
    constructor() {
        this.JSFile_List = []
    }

    register(target) {
        this.JSFile_List.push(target)
    }

    notify(content) {
        this.JSFile_List.forEach(JSFile => JSFile.Like(content))
    }
}

const store = new 이벤트저장소()

const JSFile1 = { Like: content => console.log('JSFile1 : ' + content) }
const JSFile2 = { Like: content => console.log('JSFile2 : ' + content) }
const JSFile3 = { Like: content => console.log('JSFile3 : ' + content) }

store.register(JSFile1)
store.register(JSFile2)
store.register(JSFile3)

store.notify('좋아요 +1')
// JSFile1 : '좋아요 +1'
// JSFile2 : '좋아요 +2'
// JSFile3 : '좋아요 +3'


