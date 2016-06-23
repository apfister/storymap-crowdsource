import $ from 'jquery';
import { combineReducers } from 'redux';
import {
  UPDATE_ITEM_FEATURE_SERVICE_ITEM,
  UPDATE_ITEM_FEATURE_SERVICE_ITEM_TITLE,
  UPDATE_ITEM_FEATURE_SERVICE_DEFINITION,
  UPDATE_ITEM_FEATURE_SERVICE_LAYER_DEFINITION
} from 'babel/constants/actionsTypes/Items';

const defaultItem = {
  extent: '-125,-40,70,70',
  title: '',
  tags: ['Story Map','Story Maps','Crowdsource'],
  type: 'Web Map',
  typeKeywords: ['Story Map','Story Maps','Crowdsource','StoryMap-Crowdsource-Layer','Feature Service']
};

const defaultServiceDefinition = {
	capabilities: 'Create,Update,Query,Editing,Sync',
	supportsDisconnectedEditing: false,
  spatialReference: {
    wkid: 102100
  },
  initialExtent: {
    xmin: -20085668.703089,
    ymin: -20085668.703089,
    xmax: 20085668.703089,
    ymax: 20085668.703089,
    spatialReference: {
      wkid: 102100
    }
  },
  fullExtent: {
    xmin: -20085668.703089,
    ymin: -20085668.703089,
    xmax: 20085668.703089,
    ymax: 20085668.703089,
    spatialReference: {
      wkid: 102100
    }
  },
	units: 'esriDecimalDegrees',
	editorTrackingInfo: {
		enableEditorTracking: true,
		enableOwnershipAccessControl: true,
		allowOthersToQuery: true,
		allowOthersToUpdate: false,
		allowOthersToDelete: false,
    allowAnonymousToUpdate: false,
    allowAnonymousToDelete: false
	},
	xssPreventionInfo: {
		xssPreventionEnabled: true,
		xssPreventionRule: 'InputOnly',
		xssInputRule: 'sanitizeInvalid'
	},
	maxRecordCount: 2000
};

const defaultLayerDefinition2 = {
	layers: [{
		id: 0,
		name: 'crowdsourceFeatures',
		type: 'Feature Layer',
		ownershipBasedAccessControlForFeatures: {
			allowOthersToQuery: true,
			allowOthersToDelete: false,
			allowOthersToUpdate: false,
      allowAnonymousToUpdate: false,
      allowAnonymousToDelete: false
		},
		editFieldsInfo: {
			creationDateField: 'CreationDate',
			creatorField: 'Creator',
			editDateField: 'EditDate',
			editorField: 'Editor'
		},
		drawingInfo: {
			renderer: {
				type: 'simple',
				symbol: {
					type: 'esriPMS',
					url: 'RedSphere.png',
					imageData: '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',
					contentType: 'image/png',
					width: 15,
					height: 15
				}
			}
		},
		extext: {
      xmin: -20085668.703089,
      ymin: -20085668.703089,
      xmax: 20085668.703089,
      ymax: 20085668.703089,
      spatialReference: {
        wkid: 102100
      }
		},
		capabilities: 'Create,Update,Query,Editing,Sync',
		hasStaticData: false,
		hasAttachments: true,
		geometryType: 'esriGeometryPoint',
		objectIdField: 'FID',
		fields: [{
      name: 'FID',
      type: 'esriFieldTypeInteger',
      actualType: 'int',
      alias: 'Feature ID',
      sqlType: 'sqlTypeInteger',
      nullable: false,
      editable: false,
      domain: null,
      defaultValue: null
    },
		{
      name: 'GlobalID',
      type: 'esriFieldTypeGlobalID',
      alias: 'GlobalID',
      sqlType: 'sqlTypeOther',
			length: 38,
      nullable: false,
      editable: false,
      domain: null,
      defaultValue: 'NEWID() WITH VALUES'
    },
    {
      name: 'CreationDate',
      type: 'esriFieldTypeDate',
      alias: 'CreationDate',
      sqlType: 'sqlTypeOther',
      length: 8,
      nullable: true,
      editable: false,
      domain: null,
      defaultValue: null
    },
    {
      name: 'Creator',
      type: 'esriFieldTypeString',
      alias: 'Creator',
      sqlType: 'sqlTypeOther',
      length: 50,
      nullable: true,
      editable: false,
      domain: null,
      defaultValue: null
    },
    {
      name: 'EditDate',
      type: 'esriFieldTypeDate',
      alias: 'EditDate',
      sqlType: 'sqlTypeOther',
      length: 8,
      nullable: true,
      editable: false,
      domain: null,
      defaultValue: null
    },
    {
      name: 'Editor',
      type: 'esriFieldTypeString',
      alias: 'Editor',
      sqlType: 'sqlTypeOther',
      length: 50,
      nullable: true,
      editable: false,
      domain: null,
      defaultValue: null
    },
		{
			name: 'Name',
			type: 'esriFieldTypeString',
			alias: 'Name',
			domain: null,
			editable: true,
			nullable: true,
			length: 256
		},
		{
			name: 'Description',
			type: 'esriFieldTypeString',
			alias: 'Description',
			domain: null,
			editable: true,
			nullable: true,
			length: 1500
		},
		{
			name: 'LocationName',
			type: 'esriFieldTypeString',
			alias: 'Location Name',
			domain: null,
			editable: true,
			nullable: true,
			length: 256
		},
		{
			name: 'Hidden',
			type: 'esriFieldTypeInteger',
			alias: 'Share Hidden',
			domain: null,
			editable: true,
			nullable: true,
			length: 2
		},
		{
			name: 'Vetted',
			type: 'esriFieldTypeInteger',
			alias: 'Share Vetted',
			domain: null,
			editable: true,
			nullable: true,
			length: 2
		}]
	}]
};

const defaultLayerDefinition = {
  layers: [{
    id: 0,
    name: 'crowdsourceFeatures',
    type: 'Feature Layer',
    ownershipBasedAccessControlForFeatures: {
      allowOthersToQuery: true,
      allowOthersToDelete: false,
      allowOthersToUpdate: false,
      allowAnonymousToUpdate: false,
      allowAnonymousToDelete: false
    },
    editFieldsInfo: {
      creationDateField: 'CreationDate',
      creatorField: 'Creator',
      editDateField: 'EditDate',
      editorField: 'Editor'
    },
    extext: {
      xmin: -20085668.703089,
      ymin: -20085668.703089,
      xmax: 20085668.703089,
      ymax: 20085668.703089,
      spatialReference: {
        wkid: 102100
      }
    },
    capabilities: 'Create,Update,Query,Editing,Sync',
    hasStaticData: false,
    hasAttachments: true,
    geometryType: 'esriGeometryPoint',
    objectIdField: 'OBJECTID',    
    drawingInfo: {renderer: {type: "uniqueValue", field1: "GOAL", field2: null, field3: null, fieldDelimiter: ", ", uniqueValueInfos: [{value: "1", symbol: {color: [229, 36, 59, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "No Poverty"}, {value: "2", symbol: {color: [229, 183, 53, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Zero Hunger"}, {value: "3", symbol: {color: [76, 159, 56, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Good Health and Well-Being"}, {value: "4", symbol: {color: [197, 25, 45, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Quality Education"}, {value: "5", symbol: {color: [255, 58, 33, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Gender Equality"}, {value: "6", symbol: {color: [38, 189, 226, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Clean Water and Sanitation"}, {value: "7", symbol: {color: [252, 195, 11, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Affordable and Clean Energy"}, {value: "8", symbol: {color: [162, 25, 66, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Decent Work and Economic Growth"}, {value: "9", symbol: {color: [253, 105, 37, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Industry, Innovation and Infrastructure"}, {value: "10", symbol: {color: [221, 19, 103, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Reduced Inequalities"}, {value: "11", symbol: {color: [253, 157, 36, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Sustainable Cities and Communities"}, {value: "12", symbol: {color: [201, 153, 45, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Responsible Consumption and Production"}, {value: "13", symbol: {color: [229, 36, 59, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Climate Action"}, {value: "14", symbol: {color: [229, 183, 53, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Life Below Water"}, {value: "15", symbol: {color: [76, 159, 56, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Life On Land"}, {value: "16", symbol: {color: [197, 25, 45, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Peace, Justice and Strong Institutions"}, {value: "17", symbol: {color: [255, 58, 33, 255 ], size: 13.5, angle: 0, xoffset: 0, yoffset: 0, type: "esriSMS", style: "esriSMSCircle", outline: {color: [255, 255, 255, 255 ], width: 0.99975, type: "esriSLS", style: "esriSLSSolid"} }, label: "Partnership For The Goals"}, {value: "18", symbol: {angle: 0, xoffset: 0, yoffset: 0, type: "esriPMS", url: "https://s3.amazonaws.com/sdg-images/sdg-logo-only.png", width: 16.5, height: 16.5 }, label: "All"} ] }, labelingInfo: [{labelExpression: "[GOAL]", labelExpressionInfo: {value: "{GOAL}"}, format: null, fieldInfos: [{fieldName: "GOAL", format: {places: 0, digitSeparator: true } } ], useCodedValues: false, maxScale: 0, minScale: 0, where: null, sizeInfo: null, labelPlacement: "esriServerPointLabelPlacementCenterCenter", symbol: {color: [255, 255, 255, 255 ], type: "esriTS", backgroundColor: null, borderLineColor: null, haloSize: 0, haloColor: null, horizontalAlignment: "center", rightToLeft: false, angle: 0, xoffset: 0, yoffset: 0, text: "", rotated: false, kerning: true, font: {size: 8.25, style: "normal", decoration: "none", weight: "bold", family: "Arial"} } } ] },
    fields: [
    {
      name: 'FID',
      type: 'esriFieldTypeInteger',
      actualType: 'int',
      alias: 'Feature ID',
      sqlType: 'sqlTypeInteger',
      nullable: false,
      editable: false,
      domain: null,
      defaultValue: null
    },
    {
      name: 'GlobalID',
      type: 'esriFieldTypeGlobalID',
      alias: 'GlobalID',
      sqlType: 'sqlTypeOther',
      length: 38,
      nullable: false,
      editable: false,
      domain: null,
      defaultValue: 'NEWID() WITH VALUES'
    },
    {
      name: 'CreationDate',
      type: 'esriFieldTypeDate',
      alias: 'CreationDate',
      sqlType: 'sqlTypeOther',
      length: 8,
      nullable: true,
      editable: false,
      domain: null,
      defaultValue: null
    },
    {
      name: 'Creator',
      type: 'esriFieldTypeString',
      alias: 'Creator',
      sqlType: 'sqlTypeOther',
      length: 50,
      nullable: true,
      editable: false,
      domain: null,
      defaultValue: null
    },
    {
      name: 'EditDate',
      type: 'esriFieldTypeDate',
      alias: 'EditDate',
      sqlType: 'sqlTypeOther',
      length: 8,
      nullable: true,
      editable: false,
      domain: null,
      defaultValue: null
    },
    {
      name: 'Editor',
      type: 'esriFieldTypeString',
      alias: 'Editor',
      sqlType: 'sqlTypeOther',
      length: 50,
      nullable: true,
      editable: false,
      domain: null,
      defaultValue: null
    },
    {
      name: 'NAME_ORG',
      type: 'esriFieldTypeString',
      alias: 'Name / Organization',
      domain: null,
      editable: true,
      nullable: true,
      length: 256
    },
    {
      name: "GOAL",
      type: "esriFieldTypeSmallInteger",
      alias: "Goal",
      sqlType: "sqlTypeOther",
      nullable: true,
      editable: true,
      domain: null,
      defaultValue: null
    },
    {
      name: 'WHY',
      type: 'esriFieldTypeString',
      alias: 'Why',
      domain: null,
      editable: true,
      nullable: true,
      length: 1500
    },
    {
      name: 'LocationName',
      type: 'esriFieldTypeString',
      alias: 'Location Name',
      domain: null,
      editable: true,
      nullable: true,
      length: 256
    },
    {
      name: 'Hidden',
      type: 'esriFieldTypeInteger',
      alias: 'Share Hidden',
      domain: null,
      editable: true,
      nullable: true,
      length: 2
    },
    {
      name: 'Vetted',
      type: 'esriFieldTypeInteger',
      alias: 'Share Vetted',
      domain: null,
      editable: true,
      nullable: true,
      length: 2
    }],
    types: [
      {
        "id" : "1", 
        "name" : "No Poverty", 
        "domains": 
        {
        }, 
        "templates" : [
          {
            "name" : "No Poverty", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "1", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "2", 
        "name" : "Zero Hunger", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Zero Hunger", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "2", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "3", 
        "name" : "Good Health and Well-Being", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Good Health and Well-Being", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "3", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "4", 
        "name" : "Quality Education", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Quality Education", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "4", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "5", 
        "name" : "Gender Equality", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Gender Equality", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "5", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "6", 
        "name" : "Clean Water and Sanitation", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Clean Water and Sanitation", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "6", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "7", 
        "name" : "Affordable and Clean Energy", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Affordable and Clean Energy", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "7", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "8", 
        "name" : "Decent Work and Economic Growth", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Decent Work and Economic Growth", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "8", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "9", 
        "name" : "Industry, Innovation and Infrastructure", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Industry, Innovation and Infrastructure", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "9", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "10", 
        "name" : "Reduced Inequalities", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Reduced Inequalities", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "10", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "11", 
        "name" : "Sustainable Cities and Communities", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Sustainable Cities and Communities", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "11", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "12", 
        "name" : "Responsible Consumption and Production", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Responsible Consumption and Production", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "12", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "13", 
        "name" : "Climate Action", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Climate Action", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "13", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "14", 
        "name" : "Life Below Water", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Life Below Water", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "14", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "15", 
        "name" : "Life On Land", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Life On Land", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "15", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "16", 
        "name" : "Peace, Justice and Strong Institutions", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Peace, Justice and Strong Institutions", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "16", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "17", 
        "name" : "Partnership For The Goals", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "Partnership For The Goals", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "17", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }, 
      {
        "id" : "18", 
        "name" : "All", 
        "domains" : 
        {
        }, 
        "templates" : [
          {
            "name" : "All", 
            "description" : "", 
            "drawingTool" : "esriFeatureEditToolNone", 
            "prototype" : {
              "attributes" : {
                "GOAL" : "18", 
                "NAME_ORG" : null, 
                "WHY" : null, 
                "NUMVOTES" : null, 
                "USERID" : null
              }
            }
          }
        ]
      }
    ]
  }]
};

export const item = function (state = defaultItem, action) {
  switch (action.type) {
    case UPDATE_ITEM_FEATURE_SERVICE_ITEM:
      return $.extend(true,{},state,action.parameters);
    case UPDATE_ITEM_FEATURE_SERVICE_ITEM_TITLE:
      return $.extend(true,{},state,{title: action.title});
    default:
      return state;
  }
};

export const serviceDefinition = function (state = defaultServiceDefinition, action) {
  switch (action.type) {
    case UPDATE_ITEM_FEATURE_SERVICE_DEFINITION:
      return $.extend(true,{},state,action.parameters);
    default:
      return state;
  }
};

export const layerDefinition = function (state = defaultLayerDefinition, action) {
  switch (action.type) {
    case UPDATE_ITEM_FEATURE_SERVICE_LAYER_DEFINITION:
      return $.extend(true,{},state,action.parameters);
    default:
      return state;
  }
};

export const featureService = combineReducers({
  item,
  serviceDefinition,
  layerDefinition
});

export default featureService;
