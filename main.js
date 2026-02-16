// ============================================================
// Block Definitions
// ============================================================

Blockly.Blocks['xaml_chevron_nav_button'] = {
  init: function() {
    this.appendDummyInput().appendField('ChevronNavButton');
    this.appendDummyInput().appendField('  Route:').appendField(new Blockly.FieldTextInput('LockerView'), 'ROUTE');
    this.appendDummyInput().appendField('  Text:').appendField(new Blockly.FieldTextInput('Go to Lockers'), 'TEXT');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(20);
    this.setTooltip('Navigation button with chevron icon');
  }
};

Blockly.Blocks['xaml_dashboard_tabs'] = {
  init: function() {
    this.appendDummyInput().appendField('DashboardTabs');
    this.appendDummyInput().appendField('  ActiveTab:').appendField(new Blockly.FieldTextInput('Home'), 'ACTIVE');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(20);
  }
};

Blockly.Blocks['xaml_divider'] = {
  init: function() {
    this.appendDummyInput().appendField('Divider');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(42);
  }
};

Blockly.Blocks['xaml_section_label'] = {
  init: function() {
    this.appendDummyInput().appendField('SectionLabel');
    this.appendDummyInput().appendField('  Text:').appendField(new Blockly.FieldTextInput('Section Title'), 'TEXT');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(42);
  }
};

Blockly.Blocks['xaml_primary_button'] = {
  init: function() {
    this.appendDummyInput().appendField('PrimaryButton');
    this.appendDummyInput().appendField('  Text:').appendField(new Blockly.FieldTextInput('Submit'), 'TEXT');
    this.appendDummyInput().appendField('  Command (opt):').appendField(new Blockly.FieldTextInput(''), 'COMMAND');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(170);
  }
};
Blockly.Blocks['xaml_secondary_button'] = {
  init: function() {
    this.appendDummyInput().appendField('SecondaryButton');
    this.appendDummyInput().appendField('  Text:').appendField(new Blockly.FieldTextInput('Cancel'), 'TEXT');
    this.appendDummyInput().appendField('  Command (opt):').appendField(new Blockly.FieldTextInput(''), 'COMMAND');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(170);
  }
};
Blockly.Blocks['xaml_disable_button'] = {
  init: function() {
    this.appendDummyInput().appendField('DisableButton');
    this.appendDummyInput().appendField('  Text:').appendField(new Blockly.FieldTextInput('Disabled'), 'TEXT');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(170);
  }
};
Blockly.Blocks['xaml_text_link_button'] = {
  init: function() {
    this.appendDummyInput().appendField('TextLinkButton');
    this.appendDummyInput().appendField('  Text:').appendField(new Blockly.FieldTextInput('Learn More'), 'TEXT');
    this.appendDummyInput().appendField('  Command (opt):').appendField(new Blockly.FieldTextInput(''), 'COMMAND');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(170);
  }
};

Blockly.Blocks['xaml_status_badge'] = {
  init: function() {
    this.appendDummyInput().appendField('StatusBadge');
    this.appendDummyInput().appendField('  Text:').appendField(new Blockly.FieldTextInput('Released'), 'TEXT');
    this.appendDummyInput().appendField('  Type:').appendField(new Blockly.FieldDropdown([
      ['Released','Released'],['Reserved','Reserved'],['Disabled','Disabled'],
      ['Utilized','Utilized'],['Stocked','Stocked']
    ]), 'TYPE');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(330);
  }
};

Blockly.Blocks['xaml_status_badge_row'] = {
  init: function() {
    this.appendDummyInput().appendField('StatusBadgeRow');
    this.appendDummyInput().appendField('  Pairs (text,type,...):').appendField(new Blockly.FieldTextInput('Released,Released,Reserved,Reserved'), 'PAIRS');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(330);
    this.setTooltip('Comma-separated pairs: text,type,text,type,...');
  }
};

Blockly.Blocks['xaml_dropdown'] = {
  init: function() {
    this.appendDummyInput().appendField('Dropdown');
    this.appendDummyInput().appendField('  Label:').appendField(new Blockly.FieldTextInput('Select Option'), 'LABEL');
    this.appendDummyInput().appendField('  Items (comma-sep):').appendField(new Blockly.FieldTextInput('Item 1,Item 2,Item 3'), 'ITEMS');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(195);
  }
};

Blockly.Blocks['xaml_locker_location_grid'] = {
  init: function() {
    this.appendDummyInput().appendField('LockerLocationGrid');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(195);
  }
};

Blockly.Blocks['xaml_tag_bar'] = {
  init: function() {
    this.appendDummyInput().appendField('TagBar');
    this.appendDummyInput().appendField('  Tags (comma-sep):').appendField(new Blockly.FieldTextInput('Filters,Sort: Distance,Open Weekends,Other,Favorites'), 'TAGS');
    this.appendDummyInput().appendField('  FilterRoute (opt):').appendField(new Blockly.FieldTextInput('SearchFiltersView'), 'FILTER_ROUTE');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(195);
    this.setTooltip('Toggle tag bar. First tag navigates to FilterRoute if set.');
  }
};

Blockly.Blocks['xaml_locker_list_item'] = {
  init: function() {
    this.appendDummyInput().appendField('LockerListItem');
    this.appendDummyInput().appendField('  StatusText:').appendField(new Blockly.FieldTextInput('Released'), 'STATUS_TEXT');
    this.appendDummyInput().appendField('  StatusType:').appendField(new Blockly.FieldDropdown([
      ['Released','Released'],['Reserved','Reserved'],['Disabled','Disabled'],
      ['Utilized','Utilized'],['Stocked','Stocked']
    ]), 'STATUS_TYPE');
    this.appendDummyInput().appendField('  Title:').appendField(new Blockly.FieldTextInput('Building A'), 'TITLE');
    this.appendDummyInput().appendField('  Lockers:').appendField(new Blockly.FieldTextInput('1 Lockers'), 'LOCKERS');
    this.appendDummyInput().appendField('  Compartments:').appendField(new Blockly.FieldTextInput('5 Compartments'), 'COMPARTMENTS');
    this.appendDummyInput().appendField('  Available:').appendField(new Blockly.FieldTextInput('3 Available'), 'AVAILABLE');
    this.appendDummyInput().appendField('  Empty:').appendField(new Blockly.FieldTextInput('\u2022 3 Empty'), 'EMPTY');
    this.appendDummyInput().appendField('  Reserved:').appendField(new Blockly.FieldTextInput('\u2022 3 Reserved'), 'RESERVED');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(195);
  }
};

Blockly.Blocks['xaml_text_entry'] = {
  init: function() {
    this.appendDummyInput().appendField('TextEntry');
    this.appendDummyInput().appendField('  Placeholder:').appendField(new Blockly.FieldTextInput('Enter text...'), 'PLACEHOLDER');
    this.appendDummyInput().appendField('  Binding (opt):').appendField(new Blockly.FieldTextInput(''), 'BINDING');
    this.setPreviousStatement(true); this.setNextStatement(true); this.setColour(150);
  }
};


// ============================================================
// XAML Generators
// ============================================================
var xamlGen = {
  xaml_divider: function(b) {
    return '<ui:Divider />';
  },
  xaml_chevron_nav_button: function(b) {
    return '<buttons:ChevronNavButton\n    Route="' + b.getFieldValue('ROUTE') + '"\n    Text="' + b.getFieldValue('TEXT') + '" />';
  },
  xaml_dashboard_tabs: function(b) {
    return '<menus:DashboardTabs ActiveTab="' + b.getFieldValue('ACTIVE') + '" />';
  },
  xaml_section_label: function(b) {
    return '<Label Text="' + b.getFieldValue('TEXT') + '"\n       FontSize="18"\n       FontAttributes="Bold"\n       Margin="16,10,16,5" />';
  },
  xaml_primary_button: function(b) {
    var cmd = b.getFieldValue('COMMAND');
    var attrs = 'Text="' + b.getFieldValue('TEXT') + '"';
    if (cmd) attrs += ' Command="{Binding ' + cmd + 'Command}"';
    return '<genericbuttons:PrimaryButton ' + attrs + ' />';
  },
  xaml_secondary_button: function(b) {
    var cmd = b.getFieldValue('COMMAND');
    var attrs = 'Text="' + b.getFieldValue('TEXT') + '"';
    if (cmd) attrs += ' Command="{Binding ' + cmd + 'Command}"';
    return '<genericbuttons:SecondaryButton ' + attrs + ' />';
  },
  xaml_disable_button: function(b) {
    return '<genericbuttons:DisableButton Text="' + b.getFieldValue('TEXT') + '" />';
  },
  xaml_text_link_button: function(b) {
    var cmd = b.getFieldValue('COMMAND');
    var attrs = 'Text="' + b.getFieldValue('TEXT') + '"';
    if (cmd) attrs += ' Command="{Binding ' + cmd + 'Command}"';
    return '<genericbuttons:TextLinkButton ' + attrs + ' />';
  },
  xaml_status_badge: function(b) {
    return '<badges:StatusBadge Text="' + b.getFieldValue('TEXT') + '" StatusType="' + b.getFieldValue('TYPE') + '" />';
  },
  xaml_status_badge_row: function(b) {
    var raw = b.getFieldValue('PAIRS').split(',').map(function(s){ return s.trim(); });
    var badges = [];
    for (var i = 0; i < raw.length; i += 2) {
      if (raw[i] && raw[i+1])
        badges.push('<badges:StatusBadge Text="' + raw[i] + '" StatusType="' + raw[i+1] + '" />');
    }
    return '<HorizontalStackLayout Spacing="10" Margin="16,0">\n    ' + badges.join('\n    ') + '\n</HorizontalStackLayout>';
  },
  xaml_dropdown: function(b) {
    var label = b.getFieldValue('LABEL');
    var items = b.getFieldValue('ITEMS').split(',').map(function(s){ return s.trim(); });
    var inner = items.map(function(it) {
      return '\n        <BoxView Color="{StaticResource Light-Border-Text-Input-Box}" HeightRequest="1" />' +
             '\n        <Button Clicked="ClickItem" CommandParameter="' + it + '" StyleClass="DropdownButtons" Text="' + it + '" />';
    }).join('');
    return '<buttons:Dropdown Text="' + label + '">\n    <VerticalStackLayout>' + inner + '\n    </VerticalStackLayout>\n</buttons:Dropdown>';
  },
  xaml_locker_location_grid: function(b) {
    return '<textbox:LockerLocationGrid MinimumWidthRequest="300" />';
  },
  xaml_tag_bar: function(b) {
    return '<StackLayout x:Name="TagBarContainer" Margin="16,0" />';
  },
  xaml_locker_list_item: function(b) {
    return '<textbox:LockerListItem\n' +
      '    StatusText="' + b.getFieldValue('STATUS_TEXT') + '"\n' +
      '    StatusType="' + b.getFieldValue('STATUS_TYPE') + '"\n' +
      '    Title="' + b.getFieldValue('TITLE') + '"\n' +
      '    LockerCount="' + b.getFieldValue('LOCKERS') + '"\n' +
      '    CompartmentCount="' + b.getFieldValue('COMPARTMENTS') + '"\n' +
      '    AvailableCount="' + b.getFieldValue('AVAILABLE') + '"\n' +
      '    EmptyCount="' + b.getFieldValue('EMPTY') + '"\n' +
      '    ReservedCount="' + b.getFieldValue('RESERVED') + '" />';
  },
  xaml_text_entry: function(b) {
    var ph = b.getFieldValue('PLACEHOLDER');
    var binding = b.getFieldValue('BINDING');
    var entryAttrs = 'Style="{{StaticResource TextEntry}}"\n           Placeholder="' + ph + '"';
    if (binding) entryAttrs += '\n           Text="{{Binding ' + binding + '}}"';
    return '<Border Style="{{StaticResource TextEntryBorder}}">\n    <Entry ' + entryAttrs + ' />\n</Border>';
  }
};


// ============================================================
// Workspace
// ============================================================
var workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: true,
  trashcan: true,
  zoom: { controls: true, wheel: true, startScale: 1.0, maxScale: 2, minScale: 0.5, scaleSpeed: 1.1 },
  grid: { spacing: 25, length: 3, colour: '#e0dcd6', snap: true },
  renderer: 'zelos'
});

function onResize() { Blockly.svgResize(workspace); }
window.addEventListener('resize', onResize, false);
onResize();


// ============================================================
// Tab system
// ============================================================
var activeTab = 'xaml';
var generatedOutputs = {};

var fileNameMap = {
  xaml:       function(n) { return n + 'View.xaml'; },
  codebehind: function(n) { return n + 'View.xaml.cs'; },
  viewmodel:  function(n) { return n + 'ViewModel.cs'; },
  di:         function() { return 'MauiProgram.cs (snippet)'; },
  route:      function() { return 'AppShell.xaml.cs (snippet)'; }
  shell: function(n) { return 'install_' + n + '.sh'; }
};

document.getElementById('tabBar').addEventListener('click', function(e) {
  if (!e.target.classList.contains('tab-btn')) return;
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  e.target.classList.add('active');
  activeTab = e.target.dataset.tab;
  showActiveTab();
});

function showActiveTab() {
  var name = document.getElementById('vname').value;
  var label = fileNameMap[activeTab] ? fileNameMap[activeTab](name) : '';
  document.getElementById('fileNameLabel').textContent = label;
  document.getElementById('output').textContent = generatedOutputs[activeTab] || '-- not generated yet --';
}


// ============================================================
// Collect block data for code-behind / viewmodel generation
// ============================================================
function collectBlockData() {
  var data = {
    types: {},
    tagBars: [],
    dropdowns: [],
    entries: [],
    commands: [],
    lockerItems: []
  };
  var topBlocks = workspace.getTopBlocks(true);
  topBlocks.forEach(function(topBlock) {
    var block = topBlock;
    while (block) {
      data.types[block.type] = true;

      if (block.type === 'xaml_tag_bar') {
        data.tagBars.push({
          tags: block.getFieldValue('TAGS').split(',').map(function(s) { return s.trim(); }),
          filterRoute: block.getFieldValue('FILTER_ROUTE')
        });
      }
      if (block.type === 'xaml_dropdown') {
        data.dropdowns.push({
          label: block.getFieldValue('LABEL'),
          items: block.getFieldValue('ITEMS').split(',').map(function(s) { return s.trim(); })
        });
      }
      if (block.type === 'xaml_text_entry') {
        var binding = block.getFieldValue('BINDING');
        if (binding) data.entries.push(binding);
      }
      var cmdTypes = ['xaml_primary_button', 'xaml_secondary_button', 'xaml_text_link_button'];
      if (cmdTypes.indexOf(block.type) !== -1) {
        var cmd = block.getFieldValue('COMMAND');
        if (cmd) data.commands.push(cmd);
      }
      if (block.type === 'xaml_locker_list_item') {
        data.lockerItems.push(block.getFieldValue('TITLE'));
      }

      block = block.getNextBlock();
    }
  });
  return data;
}


// ============================================================
// Helpers
// ============================================================
function toPascal(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(/\s+/).map(function(w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join('');
}

function toCamel(str) {
  var p = toPascal(str);
  return p.charAt(0).toLowerCase() + p.slice(1);
}


// ============================================================
// Generate View.xaml
// ============================================================
function generateXaml(ns, name, parts) {
  var components = parts.join('\n                ');
  return '<?xml version="1.0" encoding="utf-8" ?>\n' +
'<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"\n' +
'             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n' +
'             xmlns:genericbuttons="clr-namespace:' + ns + '.Resources.Components.Buttons"\n' +
'             xmlns:badges="clr-namespace:' + ns + '.Resources.Components.Badges"\n' +
'             xmlns:ui="clr-namespace:' + ns + '.Resources.Components.UI"\n' +
'             xmlns:common="clr-namespace:' + ns + '.Views.CommonViews"\n' +
'             xmlns:buttons="clr-namespace:' + ns + '.Resources.Components.Buttons"\n' +
'             xmlns:menus="clr-namespace:' + ns + '.Resources.Components.Menus"\n' +
'             xmlns:textbox="clr-namespace:' + ns + '.Resources.Components.TextBox"\n' +
'             Shell.NavBarIsVisible="False"\n' +
'             NavigationPage.HasNavigationBar="False"\n' +
'             x:Class="' + ns + '.Views.' + name + 'Views.' + name + 'View"\n' +
'             BackgroundColor="#FAFAFA">\n\n' +
'    <ScrollView>\n' +
'        <VerticalStackLayout>\n' +
'            <common:CustomNavigationBar\n' +
'                PageTitle="' + name + '"\n' +
'                IsBackButtonVisible="True" />\n\n' +
'            <VerticalStackLayout Spacing="20" Padding="20,10">\n' +
'                ' + components + '\n' +
'            </VerticalStackLayout>\n' +
'        </VerticalStackLayout>\n' +
'    </ScrollView>\n\n' +
'</ContentPage>';
}


// ============================================================
// Generate View.xaml.cs
// ============================================================
function generateCodeBehind(ns, name, bd) {
  var lines = [];
  var imports = ['using System.Diagnostics;'];

  if (bd.tagBars.length > 0) {
    imports.push('using ' + ns + '.Resources.Components.Buttons;');
  }

  lines.push(imports.join('\n'));
  lines.push('');
  lines.push('namespace ' + ns + '.Views.' + name + 'Views;');
  lines.push('');
  lines.push('public partial class ' + name + 'View : ContentPage');
  lines.push('{');

  // Constructor - parameterless
  lines.push('    public ' + name + 'View()');
  lines.push('    {');
  lines.push('        InitializeComponent();');

  // TagBar setup in constructor
  bd.tagBars.forEach(function(tb) {
    lines.push('');
    lines.push('        var tagBarButtons = new ToggleTagBar();');
    lines.push('        var tags = new List<TagItem>');
    lines.push('        {');
    tb.tags.forEach(function(tag) {
      var methodName = toPascal(tag);
      lines.push('            new() { name = "' + tag + '", action = ' + methodName + ' },');
    });
    lines.push('        };');
    lines.push('        tagBarButtons.SetTags(tags);');
    lines.push('        TagBarContainer.Children.Add(tagBarButtons);');
  });

  lines.push('    }');

  // Tag action methods
  bd.tagBars.forEach(function(tb) {
    lines.push('');
    lines.push('    // Toggle Tags');
    tb.tags.forEach(function(tag, idx) {
      var methodName = toPascal(tag);
      if (idx === 0 && tb.filterRoute) {
        lines.push('    async void ' + methodName + '()');
        lines.push('    {');
        lines.push('        Debug.WriteLine("' + methodName + '");');
        lines.push('        await Shell.Current.GoToAsync("' + tb.filterRoute + '");');
        lines.push('    }');
      } else {
        lines.push('    void ' + methodName + '() => Debug.WriteLine("' + tag + '");');
      }
    });
  });

  // Dropdown handler
  if (bd.dropdowns.length > 0) {
    lines.push('');
    lines.push('    // Dropdown');
    lines.push('    void ClickItem(object sender, EventArgs args)');
    lines.push('    {');
    lines.push('        if (sender is Button button && button.CommandParameter is string param)');
    lines.push('        {');
    lines.push('');
    lines.push('        }');
    lines.push('    }');
  }

  lines.push('}');
  return lines.join('\n');
}


// ============================================================
// Generate ViewModel.cs (MVVM Community Toolkit)
// ============================================================
function generateViewModel(ns, name, bd) {
  var lines = [];
  var needsCollections = bd.lockerItems.length > 0;

  lines.push('using CommunityToolkit.Mvvm.ComponentModel;');
  lines.push('using CommunityToolkit.Mvvm.Input;');
  if (needsCollections) {
    lines.push('using System.Collections.ObjectModel;');
  }
  lines.push('');
  lines.push('namespace ' + ns + '.Views.' + name + 'Views;');
  lines.push('');
  lines.push('public partial class ' + name + 'ViewModel : ObservableObject');
  lines.push('{');

  // Title
  lines.push('    [ObservableProperty]');
  lines.push('    private string _title = "' + name + '";');

  // Entry bindings -> ObservableProperty fields
  bd.entries.forEach(function(prop) {
    var fieldName = '_' + toCamel(prop);
    lines.push('');
    lines.push('    [ObservableProperty]');
    lines.push('    private string ' + fieldName + ' = string.Empty;');
  });

  // LockerListItem -> ObservableCollection hint
  if (needsCollections) {
    lines.push('');
    lines.push('    // TODO: Create LockerItemModel and populate from service');
    lines.push('    // [ObservableProperty]');
    lines.push('    // private ObservableCollection<LockerItemModel> _lockerItems = new();');
  }

  // Dropdown selected item binding
  bd.dropdowns.forEach(function(dd) {
    var propName = '_selected' + toPascal(dd.label);
    lines.push('');
    lines.push('    [ObservableProperty]');
    lines.push('    private string ' + propName + ' = string.Empty;');
  });

  // RelayCommands from button Command fields
  bd.commands.forEach(function(cmd) {
    lines.push('');
    lines.push('    [RelayCommand]');
    lines.push('    private async Task ' + cmd + '()');
    lines.push('    {');
    lines.push('        // TODO: Implement ' + cmd);
    lines.push('    }');
  });

  // GoBack
  lines.push('');
  lines.push('    [RelayCommand]');
  lines.push('    private async Task GoBack()');
  lines.push('    {');
  lines.push('        await Shell.Current.GoToAsync("..");');
  lines.push('    }');

  lines.push('}');
  return lines.join('\n');
}


// ============================================================
// DI snippet
// ============================================================
function generateDiSnippet(ns, name) {
  return '// Add to ConfigureServices in MauiProgram.cs\n' +
'builder.Services.AddTransient<' + ns + '.Views.' + name + 'Views.' + name + 'View>();\n' +
'builder.Services.AddTransient<' + ns + '.Views.' + name + 'Views.' + name + 'ViewModel>();';
}


// ============================================================
// Route snippet
// ============================================================
function generateRouteSnippet(name) {
  return '// Add to AppShell constructor\n' +
'Routing.RegisterRoute("' + name + 'View", typeof(Views.' + name + 'Views.' + name + 'View));';
}


// ============================================================
// Generate all
// ============================================================
function generate() {
  var ns = document.getElementById('ns').value;
  var name = document.getElementById('vname').value;
  var bd = collectBlockData();

  var topBlocks = workspace.getTopBlocks(true);
  var parts = [];
  topBlocks.forEach(function(topBlock) {
    var block = topBlock;
    while (block) {
      var gen = xamlGen[block.type];
      if (gen) parts.push(gen(block));
      block = block.getNextBlock();
    }
  });

  generatedOutputs.xaml       = generateXaml(ns, name, parts);
  generatedOutputs.codebehind = generateCodeBehind(ns, name, bd);
  generatedOutputs.viewmodel  = generateViewModel(ns, name, bd);
  generatedOutputs.di         = generateDiSnippet(ns, name);
  generatedOutputs.route      = generateRouteSnippet(name);
  generatedOutputs.shell = generateShellScript(ns, name);

  showActiveTab();
}


// ============================================================
// Copy
// ============================================================
function copyOutput() {
  var text = document.getElementById('output').textContent;
  navigator.clipboard.writeText(text).then(function() {
    var btn = document.querySelector('.output-copy-btn');
    btn.textContent = 'Copied!';
    setTimeout(function(){ btn.textContent = 'Copy'; }, 1500);
  });
}


// ============================================================
// Script generator
// ============================================================
function generateShellScript(ns, name) {
  var viewDir = 'Views/' + name + 'Views';
  var esc = function(s) { return s.replace(/'/g, "'\\''"); };

  var lines = [
    '#!/bin/sh',
    'set -e',
    '',
    '# Create view directory',
    'mkdir -p "' + viewDir + '"',
    '',
    '# Write ' + name + 'View.xaml',
    "cat > '" + viewDir + '/' + name + "View.xaml' << 'XAML_EOF'",
    generatedOutputs.xaml,
    'XAML_EOF',
    '',
    '# Write ' + name + 'View.xaml.cs',
    "cat > '" + viewDir + '/' + name + "View.xaml.cs' << 'CS_EOF'",
    generatedOutputs.codebehind,
    'CS_EOF',
    '',
    '# Write ' + name + 'ViewModel.cs',
    "cat > '" + viewDir + '/' + name + "ViewModel.cs' << 'VM_EOF'",
    generatedOutputs.viewmodel,
    'VM_EOF',
    '',
    '# Insert DI registration into MauiProgram.cs (before closing })',
    'DI_LINE=\'' + esc('builder.Services.AddTransient<' + ns + '.Views.' + name + 'Views.' + name + 'View>();') + '\'',
    'DI_LINE2=\'' + esc('builder.Services.AddTransient<' + ns + '.Views.' + name + 'Views.' + name + 'ViewModel>();') + '\'',
    'if ! grep -qF "$DI_LINE" MauiProgram.cs 2>/dev/null; then',
    '  sed -i "/ConfigureServices\\|AddTransient\\|AddSingleton/{" MauiProgram.cs',
    '  # Manual insert - add before last closing brace:',
    '  sed -i "/^}$/i\\        ${DI_LINE}\\n        ${DI_LINE2}" MauiProgram.cs',
    '  echo "Added DI registrations to MauiProgram.cs"',
    'else',
    '  echo "DI registrations already present"',
    'fi',
    '',
    '# Insert route registration into AppShell.xaml.cs',
    'ROUTE_LINE=\'' + esc('Routing.RegisterRoute("' + name + 'View", typeof(Views.' + name + 'Views.' + name + 'View));') + '\'',
    'if ! grep -qF "$ROUTE_LINE" AppShell.xaml.cs 2>/dev/null; then',
    '  sed -i "/RegisterRoute/{:a;n;/RegisterRoute/ba;i\\        ${ROUTE_LINE}" AppShell.xaml.cs',
    '  echo "Added route to AppShell.xaml.cs"',
    'else',
    '  echo "Route already registered"',
    'fi',
    '',
    'echo "Done: ' + name + ' view scaffolded."'
  ];
  return lines.join('\n');
}
