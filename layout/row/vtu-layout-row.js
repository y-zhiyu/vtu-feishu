import { VtuComponent } from "../../assets/package/component";
VtuComponent({
  externalClasses: [],
  // 定义和使用组件间关系
  relations: {
    "../col/vtu-layout-col": {
      type: "child",
    },
  },

  /**
   * 组件的属性列表
   */
  properties: {
    gutter: {
      type: Number,
      value: 0,
    },
    align: {
      type: String,
      value: "left",
    },
  },
  ready: function () {
    let self = this;
    this.getRelationNodes("../col/vtu-layout-col", (nodes) => {
      nodes.map((v, i) => {
        nodes[i].setGutter(self.data.gutter);
      });
    });
  },
});
