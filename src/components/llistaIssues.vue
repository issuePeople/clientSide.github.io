<template>
     <div  style="width: 100%;">
        <table class="issues-table" style="width: 100%;border-collapse:separate; border-spacing: 0 10px;">
            <tr class="row table-main" style="height: 80px;">
                <td class="level-field" style="padding-left: 20px;padding-right: 20px; text-align: center;vertical-align: middle">
                    <div class="level" style="background: rgb(228, 64, 87)"></div>
                </td>
                <td class="level-field" style="padding-left: 20px;padding-right: 20px; text-align: center;vertical-align: middle">
                    <div class="level" style="background:  rgb(64, 228, 124)"></div>
                </td>
                <td class="level-field" style="padding-left: 20px;padding-right: 20px; text-align: center;vertical-align: middle">
                    <div class="level" style="background: rgb(228, 124, 64)"></div>
                </td>
                <td @clik="namefun()" class="subject" style="text-align: center; vertical-align: middle;">
                    <span classe="issue-text" style="display: inline-flex;">
                        <span class="issue-ref">#10</span>
                        <span class="issue-subject">Patata</span>
                        
                       <!-- {%if issue.bloquejat%}
                        <div class="blocked">
                            <i class="fa fa-lock" aria-hidden="true" style="color:red;padding-right: 5px;"></i>
                        </div>
                        {%endif%}
                        {% if issue.dataLimit %}
                        <div class="due-date">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                        {%endif%}
                        <div class="cjt_tags">
                        {%for tag in issue.tags.all%}
                        <span id ="tag_show"class="tag" style="padding-right: 5px;background-color: {{tag.color}}; ">{{tag.nom}}</span>
                        {%endfor%}
                        </div>-->
                    </span>
                </td>
                <td  style="text-align: center; vertical-align: middle;">
                    
                </td>
                <td class="modified-field" style="text-align: center; vertical-align: middle;">
                               <span>{{issue.dataModificacio}}</span>
                                    
                </td>
            </tr>
        </table>
    
    </div>
    <p>patatata</p>
    
  </template>
  
  <script setup>
    function namefun() {
        
    }
    //code here
  </script>
  
  <style scoped>
.level-field{
    flex-basis: 70px;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0 .5rem;
    position: relative
}
.level {
    background-color: #70728f;
    border-radius: 9px;
    height: 18px;
    margin: 0 auto;
    width: 18px
}
.subject{
    padding-left: 1rem;
    padding-right: 0;
    text-align: right
}
.issue-ref {
    align-items: center;
    color: #008aa8;
    display: flex;
    -webkit-margin-end: 1ch;
    margin-inline-end: 1ch
}
.issue-subject {
    align-items: center;
    color: #2e3440;
    display: flex;
    -webkit-margin-end: .75rem;
    margin-inline-end: .75rem;
    word-break: break-word
}
</style>