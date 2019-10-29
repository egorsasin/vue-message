<template>
  <div id="layout">
    <div class="header">Compose new tweet</div>
    <div class="content">
      <textarea rows="3" name="tweet" v-model="tweet" placeholder="Write your tweet here"> 
      </textarea>
      <div class="photo" v-if="isPhotoUploaded">
        <figure v-for="(photo, index) in photos" v-bind:key="index">
          <button v-on:click="removePhoto(index)">
            <i class="material-icons">close</i>
          </button>
          <img v-bind:src="photo" alt="Uploaded photo">
        </figure>  
      </div>
      <div class="footer">
        <div>
          <button class="icon" v-on:click="selectPhoto">
            <i class="material-icons">photo_camera</i>
          </button>  
        </div>
        <input multiple ref="uploadPhoto" class="hidden" type="file" v-on:change="uploadPhoto">
        <div>
          <span class="counter" v-bind:class="{ 'error': outOfRange }">{{ charactersRemain }}</span>
          <button v-bind:disabled="isEmpty" class="submit">Send</button>
        </div>  
      </div>
    </div>  
  </div>
</template>

<script>
import { Component } from 'vue-property-decorator';
import Vue from 'vue';

const MAX_MESSAGE_LENGTH = 150;

export default Component({

}) (
  class Layout extends Vue { 

    tweet = "";
    photos = [];
    
    get isEmpty() {
      return this.tweet.length === 0;
    }  
    get charactersRemain() {
      return MAX_MESSAGE_LENGTH - this.tweet.length;
    }
    get isPhotoUploaded() {
      return this.photos.length > 0;
    }
    get outOfRange() {
      return this.charactersRemain <= 0;
    }
    removePhoto(index) {
      this.photos = this.photos.splice(index, 1);
    }
    selectPhoto() {
      this.$refs.uploadPhoto.click();  
    }
    uploadPhoto(event) {
      let self = this;
      let files = event.target.files;

      files.forEach((element, index) => {
        let fileReader = new FileReader(); 

        fileReader.onload = function(event) {
          self.photos = [ ...self.photos, event.target.result ];
        };

        fileReader.readAsDataURL(files[index]);
      });
    }
  }
)
</script>

<style lang="scss" scoped>

  $black: rgba(0, 0, 0, 0.1);
  $border: 1px solid $black; 
  $blue: #357edd;

  button {
    border: none;
    cursor: pointer;
  }

  .error {
    color: #e7040f !important;
  }

  .hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    width: 1px;
    overflow: hidden; 
    position: absolute !important;
  }

  #layout {

    width: 75%;
    border: $border;
  
    .header {
      text-align: center;
      padding: .5rem 0;
      border-bottom: $border;
    }

    .content {
      padding: 1rem;
      background-color: #f4f4f4;

      textarea {
        width: 100%;
        padding: .5rem;
        border: $border;
        border-radius: .25rem;
        font-size: 100%;
      }

      .photo {
        display: flex;
        padding: 0.5rem;
        padding-right: 0;
        background-color: $black;

        figure {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.5rem;
        }

        img {
          border: none;
          width: 4rem;
          height: 4rem;
        }

        button {
          display: flex;
          justify-content: center;
          position: absolute;
          margin: 0 auto;
          background-color: rgba(0, 0, 0, 1);
          width: 2rem;
          height: 2rem;
          border-radius: 100%;

          &:hover {
            opacity: .5;
          }

          i {
            color: white;
          }
        }
      }
    }
   
    .footer {
      margin-top: 1rem;
      flex-direction: row;
      justify-content: space-between;
      display: flex;
      align-items: center;

      .counter {
        margin-right: 1rem;
        color: rgba(0, 0, 0, 0.7);
      }

      button {        
        border-radius: .25rem;
        background: transparent;

        &.icon {
          display: flex;
          color: $blue;
          background-color: #f4f4f4;

          &:hover {
            background-color: $black;  
          }
        }  

        &.submit {
          background-color: $blue;        
          padding: .5rem 1rem;
          color: #fff;
        }

        &[disabled] {
          cursor: not-allowed;
          opacity: .5;
        }
      }
    }
  }
</style>