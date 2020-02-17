<template>
    <form class="form-inline" @submit.prevent="searchPost">
        <div class="row" style="width: 100%; margin: 0">
            <div class="col-lg-6"></div>
            <div class="col-lg-6" style="padding: 0">
                <div class="input-group">
                    <!-- Search clear button -->
                    <input class="form-control py-2 border-right-0 border" type="search" v-model="myKeyword" v-on:search="keywordChanged">
                    <span class="input-group-append">
                        <button class="btn btn-outline-secondary border-left-0 border" type="submit"><i class="fa fa-search"></i></button>
                    </span>
                    <button v-on:click="writePost" type="button" class="btn btn-primary" style="margin-left: 2px">New Post</button>
                    <button v-on:click="showModal" type="button" class="btn btn-primary" style="margin-left: 2px">Modal Test</button>
                </div>
            </div>
            <div class="modal" tabindex="-1" role="dialog" ref="myModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal Title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save Changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
//    import $ from 'jquery'

    // let data = {
    //     myKeyword: ''
    // }

    // export default {
    module.exports = {
        name: "SearchBox",
        data: function() {
            return {
                myKeyword: ''
            };
        },

        props: {
            keyword: {
                type: String,
                default: ''
            }
        },
        methods: {
            searchPost: function () {
                this.$emit('search', this.myKeyword)
            },
            writePost: function () {
                this.$router.push('/post-edit/0')
            },
            keywordChanged: function () {
                if (this.myKeyword == '')
                    this.searchPost()
            },
            showModal: function () {
                $(this.$refs['myModal']).modal();
            }
        },
        created() {
            this.myKeyword = this.keyword
        }
    }
</script>

<style scoped>
    #search-box {
        float: right;
        width: auto;
        margin-bottom: 8px;
        font-size: 13px;
    }
    ::-ms-clear { display: none }
    /*#search-box .keyword {*/
    /*    width: 120px;*/
    /*    height: 2.5em;*/
    /*    padding: 0.3em 0.5em;*/
    /*    border-radius: 4px;*/
    /*    border: 1px solid rgb(221,221,221);*/
    /*    display: inline-block;*/
    /*    box-sizing: border-box;*/
    /*    margin-top: 1px;*/
    /*    outline: none;*/
    /*    font-size: 14px;*/
    /*}*/
    /*button {*/
    /*    background: none;*/
    /*    box-sizing: border-box;*/
    /*    border-radius: 5px;*/
    /*    border: 1px solid #ccc;*/
    /*    cursor: pointer;*/
    /*}*/
    /*button.search {*/
    /*    background-color: #f8f8f8;*/
    /*    height: 2.6em;*/
    /*    display: inline-block;*/
    /*    box-sizing: border-box;*/
    /*    padding: 0.3em 0.5em;*/
    /*    outline: none;*/
    /*    font-size: 13px;*/
    /*}*/
    button.search:hover {
        background-color: #3e82cf;
        color: white;
    }
    .form-control-clear {
        z-index: 10;
        pointer-events: auto;
        cursor: pointer;
    }
</style>