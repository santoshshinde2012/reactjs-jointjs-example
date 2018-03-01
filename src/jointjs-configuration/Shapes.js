import $ from 'jquery/dist/jquery';
import joint from 'jointjs/index';

const g = joint.g;
const V = joint.V;

// It is used to hold all custom shapes
joint.shapes.customShapes = {};

joint.shapes.customShapes.BaseShape = joint.shapes.devs.Model.extend({

    defaults: joint.util.deepSupplement({

        type: 'devs.Atomic',
        size: { width: 80, height: 80 },
        attrs: {
            '.body': { fill: 'salmon' },
            '.label': { text: 'Atomic' },
            '.inPorts .port-body': { fill: 'PaleGreen' },
            '.outPorts .port-body': { fill: 'Tomato' }
        }

    }, joint.shapes.devs.Model.prototype.defaults)

});


joint.shapes.devs.Link = joint.dia.Link.extend({

    defaults: {
        type: 'devs.Link',
        attrs: { '.connection' : { 'stroke-width' :  2 }}
    }
});

joint.shapes.devs.ModelView = joint.dia.ElementView.extend(joint.shapes.basic.PortsViewInterface);
joint.shapes.devs.BaseShapeView = joint.shapes.devs.ModelView;
