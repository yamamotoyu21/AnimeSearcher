<script setup>
import { reactive, computed } from 'vue'

import axios from 'axios'
</script>

<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 800px" fclass="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            <router-link to="/" class="text-white" style="text-decoration: none;">アニメデータベース</router-link>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>
            <small>出典: 文化庁「メディア芸術データベース（ベータ版）」（https://mediaarts-db.bunka.go.jp/）</small>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <router-view :items="items" @getRecords="getRecords"></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
